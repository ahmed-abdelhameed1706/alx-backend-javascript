const Utils = require("./utils");
const calc = Utils.calculateNumber;

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  total = calc("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
};

module.exports = sendPaymentRequestToApi;
