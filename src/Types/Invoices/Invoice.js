const PayPalClass = require("../../PayPal");

const InvoiceDetail = require("./InvoiceDetail");
const InvoiceInvoicerInfo = require("./InvoiceInvoicerInfo");
const RecipientInfo = require("../General/RecipientInfo");
const Item = require("../General/Item");
const Configuration = require("../General/Configuration");
const Money = require("../General/Money");
const AmountSummaryDetail = require("../General/AmountSummaryDetail");
const Payments = require("../General/Payments");
const Refunds = require("../General/Refunds");
const LinkDescription = require("../General/LinkDescription");

const InvoiceAPI = require("../../API/Invoices/Invoices");

class Invoice {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /*

  Invoice methods

  */

  async delete() {
    if (!["DRAFT", "SCHEDULED"].includes(this.status)) {
      throw new Error(
        "You can only cancel invoices in Draft or Scheduled state"
      );
    }

    const api = new InvoiceAPI(this.PayPal);
    const deleted = await api.delete(this.id);

    return deleted;
  }

  /*

  Invoice methods

  */

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
   * @param {String} id
   * @returns
   */
  setId(id) {
    this.id = id;
    return this;
  }

  /**
   *
   * @param {String} parentId
   * @returns
   */
  setParentId(parentId) {
    this.parentId = parentId;
    return this;
  }

  /**
   *
   * @param {String} status
   * @returns
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   *
   * @param {InvoiceDetail} detail
   */
  setDetail(detail) {
    this.detail = detail;
    return this;
  }

  /**
   *
   * @param {InvoiceInvoicerInfo} invoicer
   * @returns
   */
  setInvoicer(invoicer) {
    this.invoicer = invoicer;
    return this;
  }

  /**
   *
   * @param {RecipientInfo} recipients
   * @returns
   */
  setPrimaryRecipients(recipients) {
    this.primaryRecipients = recipients;
    return this;
  }

  /**
   *
   * @param {Array<String>} recipients - array of email addressses
   * @returns
   */
  setAdditionalRecipients(recipients) {
    this.additionalRecipients = recipients;
    return this;
  }

  /**
   *
   * @param {Array<Item>} items
   * @returns
   */
  setItems(items) {
    this.items = items;
    return this;
  }

  /**
   *
   * @param {Configuration} config
   * @returns
   */
  setConfiguration(config) {
    this.configuration = config;
    return this;
  }

  /**
   *
   * @param {AmountSummaryDetail} amount
   * @returns
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   *
   * @param {Money} dueAmount
   * @returns
   */
  setDueAmount(dueAmount) {
    this.dueAmount = dueAmount;
    return this;
  }

  /**
   *
   * @param {Money} gratuity
   * @returns
   */
  setGratuity(gratuity) {
    this.gratuity = gratuity;
    return this;
  }

  /**
   *
   * @param {Payments} payments
   * @returns
   */
  setPayments(payments) {
    this.payments = payments;
    return this;
  }

  /**
   *
   * @param {Refunds} refunds
   * @returns
   */
  setRefunds(refunds) {
    this.refunds = refunds;
    return this;
  }

  /**
   *
   * @param {Array<LinkDescription>} links
   * @returns
   */
  setLinks(links) {
    this.links = links;
    return this;
  }
}

module.exports = Invoice;
