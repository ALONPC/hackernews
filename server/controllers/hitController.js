const Hit = require("../models/Hit");

exports.getHits = async (req, res, next) => {
  console.log("get all hits!!!");
  try {
    const hits = await Hit.find();
    return res.json(hits);
  } catch (err) {
    console.log("error on fetching hits");
  }
};

exports.deleteHit = async (req, res, next) => {
  console.log("delete hit!!!");
  const id = req.params.id;
  console.log("exports.deleteHit -> id", id);
  try {
    const deletedHit = await Hit.findByIdAndRemove(id);
    console.log("exports.deleteHit -> deletedHit", deletedHit);
    res.send({
      message: `Hit ${id} was deleted successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not delete hit ${id}`,
    });
  }
};
