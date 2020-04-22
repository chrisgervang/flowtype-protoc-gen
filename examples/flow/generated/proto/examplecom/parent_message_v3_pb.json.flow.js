// @flow
// package: examplecom
// file: proto/examplecom/parent_message_v3.proto

import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb.flow.js";
export type ParentMessageV3 = {
  internalChildMessage?: ParentMessageV3_InternalChildMessage,
  internalChildren: Array<ParentMessageV3_InternalChildMessage>,
  externalChildMessage?: proto_othercom_external_child_message_pb.ExternalChildMessage,
  externalChildren: Array<proto_othercom_external_child_message_pb.ExternalChildMessage>,
}
export type ParentMessageV3_InternalChildMessage = {
  myString: string,
}

