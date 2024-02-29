const chai = require("chai");
const expect = chai.expect;

const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
  it("should check if type is SUM", function () {
    expect(calculateNumber("SUM", 1.4, 2.6)).to.equal(4);
    expect(calculateNumber("SUM", 3.3, 4.7)).to.equal(8);
  });

  it("should check if type is SUBTRACT", function () {
    expect(calculateNumber("SUBTRACT", 1.4, 2.6)).to.equal(-2);
    expect(calculateNumber("SUBTRACT", 7.3, 4.7)).to.equal(2);
  });

  it("should check if type is DIVIDE", function () {
    expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber("DIVIDE", 1.4, 0.1)).to.equal("Error");
  });
});
