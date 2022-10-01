import Types from "../Types.js";
import FileReference, { TFileReference } from "./FileReference.js";
import PaymentTerm, { TPaymentTerm } from "./PaymentTerm.js";
import TemplateMetadata, { TTemplateMetadata } from "./TemplateMetadata.js";

export type TTemplateDetail = {
  currency_code: string;
  attachments?: TFileReference[];
  memo?: string;
  note?: string;
  reference?: string;
  terms_and_conditions?: string;
  metadata?: TTemplateMetadata;
  payment_term?: TPaymentTerm;
};

class TemplateDetail extends Types {
  currencyCode?: string;
  attachments?: FileReference[];
  memo?: string;
  note?: string;
  reference?: string;
  termsAndConditions?: string;
  metadata?: TemplateMetadata;
  paymentTerm?: PaymentTerm;
  constructor() {
    super();
  }

  setCurrencyCode(currencyCode: string) {
    this.currencyCode = currencyCode;
    return this;
  }

  setAttachments(attachments: FileReference[]) {
    this.attachments = attachments;
    return this;
  }

  setMemo(memo: string) {
    this.memo = memo;
    return this;
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  setReference(reference: string) {
    this.reference = reference;
    return this;
  }

  setTermsAndConditions(termsAndConditions: string) {
    this.termsAndConditions = termsAndConditions;
    return this;
  }

  setMetadata(metadata: TemplateMetadata) {
    this.metadata = metadata;
    return this;
  }

  setPaymentTerm(paymentTerm: PaymentTerm) {
    this.paymentTerm = paymentTerm;
    return this;
  }

  override fromObject(obj: TTemplateDetail) {
    this.currencyCode = obj.currency_code;
    this.attachments = obj.attachments?.map((attachment) => {
      return new FileReference().fromObject(attachment);
    });
    this.memo = obj.memo;
    this.note = obj.note;
    this.reference = obj.reference;
    this.termsAndConditions = obj.terms_and_conditions;
    this.metadata = obj.metadata ? new TemplateMetadata().fromObject(obj.metadata) : undefined;
    this.paymentTerm = obj.payment_term ? new PaymentTerm().fromObject(obj.payment_term) : undefined;
    return this;
  }
}

export default TemplateDetail;
