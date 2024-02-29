const expect = require("chai").expect;
const request = require("request");

describe("checking the API", function () {
  it("checks status code and body of api", function (done) {
    request("http://localhost:7865", function (req, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});
