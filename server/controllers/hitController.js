const Hit = require("../models/Hit");

exports.getHits = async (req, res, next) => {
  try {
    const hits = await Hit.find();
    return res.json(hits);
  } catch (err) {
    res.status(500).send({
      message: `Error. Could not fetch hits ${id}`,
    });
  }
};

exports.deleteHit = async ({ params: { id } }, res, next) => {
  try {
    await Hit.findByIdAndRemove(id);
    const msg = `Hit ${id} was deleted successfully!`;
    console.log(msg);
    res.send({
      message: msg,
    });
  } catch (err) {
    res.status(500).send({
      message: `Error. Could not delete hit ${id}`,
    });
  }
};
