import { PatchOperation } from "../Enums/PatchOperation.js";
import Types, { ITypes, Static } from "../Types.js";

export type TPatch = {
  op: keyof typeof PatchOperation;
  from?: string;
  path?: string;
  value?: number | string | boolean | null | any[] | object;
};

class Patch extends Types implements Static<ITypes, typeof Patch> {
  op?: PatchOperation;
  from?: string;
  path?: string;
  value?: number | string | boolean | null | any[] | object;
  constructor() {
    super();
  }

  setOp(op: PatchOperation | ((op: typeof PatchOperation) => PatchOperation)) {
    if (typeof op === "function") this.op = op(PatchOperation);
    else this.op = op;
    return this;
  }

  setFrom(from: string) {
    this.from = from;
    return this;
  }

  setPath(path: string) {
    this.path = path;
    return this;
  }

  setValue(value: number | string | boolean | null | any[] | object) {
    this.value = value;
    return this;
  }

  static fromObject(obj: TPatch) {
    const patch = new Patch();
    if (obj.op) patch.setOp(PatchOperation[obj.op]);
    if (obj.from) patch.setFrom(obj.from);
    if (obj.path) patch.setPath(obj.path);
    if (obj.value) patch.setValue(obj.value);
    return patch;
  }
}

export default Patch;
