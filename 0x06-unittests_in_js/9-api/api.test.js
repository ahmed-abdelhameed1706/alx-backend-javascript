const expect = require("chai").expect;
const request = require("request");

describe("checking the API Index Page", function () {
  it("checks status code and body of api Index Page", function (done) {
    request("http://localhost:7865", function (req, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("checking the API Cart Page", function () {
  it("checks cart page status code with number", function (done) {
    request("http://localhost:7865/cart/12", function (req, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("checks cart page status code with string", function (done) {
    request("http://localhost:7865/cart/asd", function (req, res) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
