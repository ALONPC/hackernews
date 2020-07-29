const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Hit = require("./models/Hit");
const cors = require("cors");
const fetch = require("node-fetch");
app.use(cors());
require("dotenv").config();
require("./routes/index")(app);

const PORT = process.env.PORT || 8001;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, host ${HOST}`);
});

const connectDb = async () => {
  try {
    await mongoose.connect(`mongodb://${HOST}:27017/hackernews`, {
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
  const existingHits = await Hit.find().exec();
  if (!!existingHits.length) {
    console.log("there's data already! no need of a seed");
  } else {
    const {
      hits,
    } = await fetch(
      "https://hn.algolia.com/api/v1/search_by_date?query=nodejs",
      { method: "GET" }
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
  }
};

seedDb();
