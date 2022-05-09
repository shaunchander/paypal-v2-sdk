const PayPalClass = require("../../PayPal");
const Money = require("./Money");

class PartialPayment {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  toJson() {
    return JSON.stringify(this.toAttributeObject());
  }

  toAttributeObject() {
    const obj = {};
    for (const entry of Object.keys(this)) {
      obj[entry.replace(/[A-Z]/g, (x) => `_${x.toLowerCase()}`)] =
        this[entry] instanceof Object
          ? this[entry].toAttributeObject()
          : this[entry];
    }
    return obj;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns
   */
  setAllowPartialPayment(boolean) {
    this.allowPartialPayment = boolean;
    return this;
  }

  /**
   *
   * @param {Money} minAmountDue
   * @returns
   */
  setMinimumAmountDue(minAmountDue) {
    this.minimumAmountDue = minAmountDue;
    return this;
  }
}

module.exports = PartialPayment;
