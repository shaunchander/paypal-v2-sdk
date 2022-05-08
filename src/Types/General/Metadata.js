const PayPalClass = require("../../PayPal");

class Metadata {
  /**
   *
   * @param {PayPal} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setCreateTime(date) {
    this.createTime = date instanceof Date ? date : new Date(date);
    return this;
  }

  /**
   *
   * @param {String} email
   * @returns
   */
  setCreatedBy(email) {
    this.createdBy = email;
    return this;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setLastUpdateTime(date) {
    this.lastUpdateTime = date instanceof Date ? date : new Date(date);
    return this;
  }

  /**
   *
   * @param {String} email
   * @returns
   */
  setLastUpdatedBy(email) {
    this.lastedUpdatedBy = email;
    return this;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setCancelTime(date) {
    this.cancelTime = date instanceof Date ? date : new Date(date);
    return this;
  }

  /**
   *
   * @param {String} actor
   * @returns
   */
  setCancelledBy(actor) {
    this.cancelledBy = actor;
    return this;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setFirstTimeSent(date) {
    this.firstTimeSent = date instanceof Date ? date : new Date(date);
    return this;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setLastTimeSent(date) {
    this.lastTimeSent = date instanceof Date ? date : new Date(date);
    return this;
  }

  /**
   *
   * @param {String} email
   * @returns
   */
  setLastSentBy(email) {
    this.lastSentBy = email;
    return this;
  }

  /**
   *
   * @param {String} flow
   * @returns
   */
  setCreatedByFlow(flow) {
    this.createdByFlow = flow;
    return this;
  }

  /**
   *
   * @param {String} url
   * @returns
   */
  setRecipientViewUrl(url) {
    this.recipientViewUrl = url;
    return this;
  }

  setInvoicerViewUrl(url) {
    this.invoicerViewUrl = url;
    return this;
  }
}

module.exports = Metadata;