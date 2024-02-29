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
    request("http://localhost:7865/cart/12", function (req, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Payment methods for cart 12");
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

describe("checking the login endpoint", function () {
  it("checks if I can login i guess", function (done) {
    request.post(
      {
        url: "http://localhost:7865/login",
        json: { userName: "Ahmed" },
      },
      (err, res, body) => {
        expect(body).to.equal(`Welcome Ahmed`);
        done();
      }
    );
  });
});

describe("checking the available payment methods", function () {
  const payments = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  it("checks for the available methods page", function (done) {
    request.get(
      "http://localhost:7865/available_payments",
      function (err, res, body) {
        expect(JSON.parse(body)).to.deep.equal(payments);
        done();
      }
    );
  });
});
