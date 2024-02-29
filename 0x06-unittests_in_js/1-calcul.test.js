const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  it("should check if type is SUM", function () {
    assert.equal(calculateNumber("SUM", 1.4, 2.6), 4);
    assert.equal(calculateNumber("SUM", 3.3, 4.7), 8);
    assert.equal(calculateNumber("SUM", 0.2, 0.1), 0);
  });
  it("sould check if type is SUBTRACT", function () {
    assert.equal(calculateNumber("SUBTRACT", 1.4, 2.6), -2);
    assert.equal(calculateNumber("SUBTRACT", 7.3, 4.7), 2);
    assert.equal(calculateNumber("SUBTRACT", 0.2, 0.1), 0);
  });
  it("should check if type is DIVIDE", function () {
    assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    assert.equal(calculateNumber("DIVIDE", 1.4, 0.1), "Error");
  });
});
