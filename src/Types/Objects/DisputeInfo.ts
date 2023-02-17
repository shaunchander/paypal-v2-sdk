import { DisputeChannel } from "../Enums/DisputeChannel";
import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage";
import { DisputeReason } from "../Enums/DisputeReason";
import { DisputeState } from "../Enums/DisputeState";
import { DisputeStatus } from "../Enums/DisputeStatus";
import Types, { ITypes, Static } from "../Types";
import Cryptocurrency, { TCryptocurrency } from "./Cryptocurrency";
import LinkDescription, { TLinkDescription } from "./LinkDescription";
import Money, { TMoney } from "./Money";

export type TDisputeInfo = {
  buyer_response_due_date?: string;
  create_time?: string;
  dispute_amount?: TMoney;
  dispute_asset?: TCryptocurrency;
  dispute_channel?: keyof typeof DisputeChannel;
  dispute_id?: string;
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
  dispute_state?: keyof typeof DisputeState;
  links?: TLinkDescription[];
  reason?: keyof typeof DisputeReason;
  seller_response_due_date?: string;
  status?: keyof typeof DisputeStatus;
  update_time?: string;
};

class DisputeInfo extends Types implements Static<ITypes, typeof DisputeInfo> {
  buyerResponseDueDate?: string;
  createTime?: string;
  disputeAmount?: Money;
  disputeAsset?: Cryptocurrency;
  disputeChannel?: DisputeChannel;
  disputeId?: string;
  disputeLifeCycleStage?: DisputeLifeCycleStage;
  disputeState?: DisputeState;
  links?: LinkDescription[];
  reason?: DisputeReason;
  sellerResponseDueDate?: string;
  status?: DisputeStatus;
  updateTime?: string;
  constructor() {
    super();
  }

  setBuyerResponseDueDate(buyerResponseDueDate: string) {
    this.buyerResponseDueDate = buyerResponseDueDate;
    return this;
  }

  setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }

  setDisputeAmount(disputeAmount: Money) {
    this.disputeAmount = disputeAmount;
    return this;
  }

  setDisputeAsset(disputeAsset: Cryptocurrency) {
    this.disputeAsset = disputeAsset;
    return this;
  }

  setDisputeChannel(disputeChannel: DisputeChannel) {
    this.disputeChannel = disputeChannel;
    return this;
  }

  setDisputeId(disputeId: string) {
    this.disputeId = disputeId;
    return this;
  }

  setDisputeLifeCycleStage(disputeLifeCycleStage: DisputeLifeCycleStage) {
    this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }

  setDisputeState(disputeState: DisputeState) {
    this.disputeState = disputeState;
    return this;
  }

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }

  setReason(reason: DisputeReason) {
    this.reason = reason;
    return this;
  }

  setSellerResponseDueDate(sellerResponseDueDate: string) {
    this.sellerResponseDueDate = sellerResponseDueDate;
    return this;
  }

  setStatus(status: DisputeStatus) {
    this.status = status;
    return this;
  }

  setUpdateTime(updateTime: string) {
    this.updateTime = updateTime;
    return this;
  }

  static fromObject(obj: TDisputeInfo) {
    const disputeInfo = new DisputeInfo();
    if (obj.buyer_response_due_date) disputeInfo.setBuyerResponseDueDate(obj.buyer_response_due_date);
    if (obj.create_time) disputeInfo.setCreateTime(obj.create_time);
    if (obj.dispute_amount) disputeInfo.setDisputeAmount(Money.fromObject(obj.dispute_amount));
    if (obj.dispute_asset) disputeInfo.setDisputeAsset(Cryptocurrency.fromObject(obj.dispute_asset));
    if (obj.dispute_channel) disputeInfo.setDisputeChannel(DisputeChannel[obj.dispute_channel]);
    if (obj.dispute_id) disputeInfo.setDisputeId(obj.dispute_id);
    if (obj.dispute_life_cycle_stage)
      disputeInfo.setDisputeLifeCycleStage(DisputeLifeCycleStage[obj.dispute_life_cycle_stage]);
    if (obj.dispute_state) disputeInfo.setDisputeState(DisputeState[obj.dispute_state]);
    if (obj.links) disputeInfo.setLinks(obj.links.map((link) => LinkDescription.fromObject(link)));
    if (obj.reason) disputeInfo.setReason(DisputeReason[obj.reason]);
    if (obj.seller_response_due_date) disputeInfo.setSellerResponseDueDate(obj.seller_response_due_date);
    if (obj.status) disputeInfo.setStatus(DisputeStatus[obj.status]);
    if (obj.update_time) disputeInfo.setUpdateTime(obj.update_time);
    return disputeInfo;
  }
}

export default DisputeInfo;
