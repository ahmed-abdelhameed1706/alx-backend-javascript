const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const { expect } = require("chai");

describe("Checking if utils.calcNumber is working when sendPayent is called", function () {
  it("checks if function was called", function () {
    const calcSpy = sinon.spy(Utils, "calculateNumber");

    sendPaymentRequestToApi(100, 20);
    expect(calcSpy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;

    calcSpy.restore();
  });
});
