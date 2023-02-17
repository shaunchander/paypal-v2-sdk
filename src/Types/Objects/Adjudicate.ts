import { AdjudicationOutcome } from "../Enums/AdjudicationOutcome";
import Types, { ITypes, StaticImplements } from "../Types";

export type TAdjudicate = {
  adjudication_outcome?: keyof typeof AdjudicationOutcome;
};

class Adjudicate extends Types implements StaticImplements<ITypes, typeof Adjudicate> {
  adjudicationOutcome!: AdjudicationOutcome;
  constructor() {
    super();
  }

  setAdjudicationOutcome(adjudicationOutcome: AdjudicationOutcome) {
    this.adjudicationOutcome = adjudicationOutcome;
    return this;
  }

  static fromObject(obj: TAdjudicate) {
    const adjudicate = new Adjudicate();
    if (obj.adjudication_outcome !== undefined)
      adjudicate.setAdjudicationOutcome(AdjudicationOutcome[obj.adjudication_outcome]);
    return adjudicate;
  }
}

export default Adjudicate;
