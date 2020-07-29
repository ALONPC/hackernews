const Hit = require("../models/Hit");

describe("something", () => {
  it("saves a hit", () => {
    const hit = new Hit({
      title: "test, duh",
      author: "author of the test",
    });
    hit.save();
  });
});
