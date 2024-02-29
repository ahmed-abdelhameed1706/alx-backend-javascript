const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should check for equality", function () {
    assert.equal(calculateNumber(1.4, 2.6), 4);
    assert.equal(calculateNumber(3.3, 4.7), 8);
    assert.equal(calculateNumber(0.2, 0.1), 0);
  });
});
