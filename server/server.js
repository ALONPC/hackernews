const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Hit = require("./models/Hit");
const cors = require("cors");
const fetch = require("node-fetch");
const cron = require("node-cron");
app.use(cors());
require("dotenv").config();
require("./routes/index")(app);

const PORT = process.env.PORT || 8001;
const DBHOST = process.env.DBHOST || "localhost";

const connectDb = async () => {
  try {
    await mongoose.connect(`mongodb://${DBHOST}:27017/hackernews`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (err) {
    console.log("An error occurred when trying to connect to database", err);
  }
};

connectDb();

const seedDb = async () => {
  Hit.collection.drop();
  const { hits } = await fetch(
    "https://hn.algolia.com/api/v1/search_by_date?query=nodejs",
    {
      method: "GET",
    }
  ).then((res) => res.json());
  for (const hit of hits) {
    const newHit = new Hit(hit);
    await newHit.save((err, obj) => {
      if (err) {
        return console.error(err);
      }
      console.log(`${obj.title || obj.story_title} saved in the collection`);
    });
  }
  console.log("Seed completed!");
};

// runs the seedDB every hour
cron.schedule("0 0 */1 * * *", () => {
  seedDb();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, host ${DBHOST}`);
});
