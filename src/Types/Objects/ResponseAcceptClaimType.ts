import Types, { ITypes, Static } from "../Types.js";
import { ResponseAcceptClaimType as ResponseAcceptClaimTypeEnum } from "../Enums/ResponseAcceptClaimType.js";

export type TResponseAcceptClaimType = {
  "response-accept_claim_type"?: keyof typeof ResponseAcceptClaimTypeEnum;
};

class ResponseAcceptClaimType extends Types implements Static<ITypes, typeof ResponseAcceptClaimType> {
  responseAcceptClaimType?: ResponseAcceptClaimTypeEnum;
  constructor() {
    super();
  }

  setResponseAcceptClaimType(
    responseAcceptClaimType:
      | ResponseAcceptClaimTypeEnum
      | ((responseAcceptClaimType: typeof ResponseAcceptClaimTypeEnum) => ResponseAcceptClaimTypeEnum)
  ) {
    if (typeof responseAcceptClaimType === "function")
      this.responseAcceptClaimType = responseAcceptClaimType(ResponseAcceptClaimTypeEnum);
    else this.responseAcceptClaimType = responseAcceptClaimType;
    return this;
  }

  static fromObject(obj: TResponseAcceptClaimType) {
    const responseAcceptClaimType = new ResponseAcceptClaimType();
    if (obj["response-accept_claim_type"])
      responseAcceptClaimType.setResponseAcceptClaimType(
        ResponseAcceptClaimTypeEnum[obj["response-accept_claim_type"]]
      );
    return responseAcceptClaimType;
  }
}

export default ResponseAcceptClaimType;
