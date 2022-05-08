const PayPalClass = require("../../PayPal");
const AmountWithBreakdown = require("./AmountWithBreakdown");

class AmountSummaryDetail {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} code
   * @returns
   */
  setCurrencyCode(code) {
    this.currencyCode = code;
    return this;
  }

  /**
   *
   * @param {String} value
   * @returns
   */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   *
   * @param {AmountWithBreakdown} breakdown
   * @returns
   */
  setBreakdown(breakdown) {
    this.breakdown = breakdown;
    return this;
  }
}

module.exports = AmountSummaryDetail;