const PayPalClass = require("../../PayPal");

const Money = require("./Money");

class Tax {
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
   * @param {String} name
   * @returns
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   *
   * @param {String} percent - from 0 to 100
   * @returns
   */
  setPercent(percent) {
    this.percent = percent;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }
}

module.exports = Tax;
