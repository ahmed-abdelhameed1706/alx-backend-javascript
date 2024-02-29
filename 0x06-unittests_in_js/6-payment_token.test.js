const expect = require("chai").expect;
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
  it("checks if function is called with True", function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.eql({ data: "Successful response from the API" });
        done();
      })
      .catch((err) => done(err));
  });
});
