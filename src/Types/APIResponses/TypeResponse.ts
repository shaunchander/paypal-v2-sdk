import PayPal from "../../PayPal";
import Types from "../Types";

class TypeResponse extends Types {
  constructor() {
    super();
  }

  override fromObject(obj: any) {
    throw new Error(
      "Method not supported for API Responses. Properties are read-only."
    );
    return this;
  }
}

export default TypeResponse;
