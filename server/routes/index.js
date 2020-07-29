const hitController = require("../controllers/hitController");
const router = require("express").Router();
const cors = require("cors");

module.exports = (app) => {
  router.get("/", cors(), hitController.getHits);
  router.delete("/:id", cors(), hitController.deleteHit);
  app.use("/api/hits", router);
};
