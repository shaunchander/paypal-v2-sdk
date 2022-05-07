const BasePayPal = require("./BasePayPal");

const Token = require("./API/Authentication/Token");

const Axios = require("axios").default;

class PayPal extends BasePayPal {
  constructor() {
    super();
  }

  async authenticate() {
    if (this.clientId === null || this.clientSecret === null) {
      throw new Error(
        "You must configure Client ID & Secret before authenticating!"
      );
    }

    try {
      this.token = await new Token(this.eventHandler).requestNewToken(
        this.clientId,
        this.clientSecret
      );
    } catch (e) {
      throw e;
    }

    Axios.defaults.baseURL = "https://api.paypal.com/";
  }

  on(event, callback) {
    return this.eventHandler.on(event, callback);
  }

  once(event, callback) {
    return this.eventHandler.once(event, callback);
  }
}

module.exports = PayPal;
