// @flow
// package: examplecom
// file: proto/examplecom/parent_message_v2.proto

import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb.flow.js";
export type ParentMessageV2 = {
  internalChildMessage: ParentMessageV2_InternalChildMessage,
  optInternalChildMessage?: ParentMessageV2_InternalChildMessage,
  internalChildren: Array<ParentMessageV2_InternalChildMessage>,
  externalChildMessage: proto_othercom_external_child_message_pb.ExternalChildMessage,
  optExternalChildMessage?: proto_othercom_external_child_message_pb.ExternalChildMessage,
  externalChildren: Array<proto_othercom_external_child_message_pb.ExternalChildMessage>,
}
export type ParentMessageV2_InternalChildMessage = {
  myString?: string,
}

