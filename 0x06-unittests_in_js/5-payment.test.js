const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const { expect } = require("chai");

describe("Checking if utils.calcNumber is working when sendPayent is called", function () {
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    consoleSpy.restore();
  });

  it("checks if function was called", function () {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly("The total is: 120")).to.be.true;
  });

  it("checks if function was called with different values", function () {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly("The total is: 20")).to.be.true;
  });
});
