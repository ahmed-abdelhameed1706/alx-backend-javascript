const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const { expect } = require("chai");

describe("Checking if utils.calcNumber is working when sendPayent is called", function () {
  it("checks if function was called", function () {
    const calcStub = sinon.stub(Utils, "calculateNumber").returns(10);
    const consoleSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    expect(calcStub.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly("The total is: 10")).to.be.true;

    calcStub.restore();
    consoleSpy.restore();
  });
});
