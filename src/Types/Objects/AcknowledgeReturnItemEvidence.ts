import { EvidenceType } from "../Enums/EvidenceType.js";
import Types, { ITypes, Static } from "../Types.js";
import Document, { TDocument } from "./Document.js";

export type TAcknowledgeReturnItemEvidence = {
  documents?: TDocument[];
  evidence_type?: keyof typeof EvidenceType;
};

class AcknowledgeReturnItemEvidence extends Types implements Static<ITypes, typeof AcknowledgeReturnItemEvidence> {
  documents?: Document[];
  evidenceType?: EvidenceType;
  constructor() {
    super();
  }

  setDocuments(...documents: (Document | ((document: Document) => void))[]) {
    this.documents = documents.map((document) => {
      if (document instanceof Document) return document;
      const doc = new Document();
      document(doc);
      return doc;
    });
    return this;
  }

  setEvidenceType(evidenceType: EvidenceType | ((type: typeof EvidenceType) => EvidenceType)) {
    if (typeof evidenceType === "function") this.evidenceType = evidenceType(EvidenceType);
    else this.evidenceType = evidenceType;
    return this;
  }

  static fromObject(obj: TAcknowledgeReturnItemEvidence) {
    const acknowledgeReturnItemEvidence = new AcknowledgeReturnItemEvidence();
    if (obj.documents)
      acknowledgeReturnItemEvidence.setDocuments(...obj.documents.map((document) => Document.fromObject(document)));
    if (obj.evidence_type !== undefined) acknowledgeReturnItemEvidence.setEvidenceType(EvidenceType[obj.evidence_type]);
    return acknowledgeReturnItemEvidence;
  }
}

export default AcknowledgeReturnItemEvidence;
