// @flow
// package: examplecom
// file: proto/examplecom/enum_message.proto

import * as proto_othercom_external_enum_pb from "../../proto/othercom/external_enum_pb.flow.js";
export type EnumMessage = {
  internalEnum: $Values<typeof EnumMessage_InternalEnum>,
  internalEnums: Array<$Values<typeof EnumMessage_InternalEnum>>,
  externalEnum: $Values<typeof proto_othercom_external_enum_pb.ExternalEnum>,
  externalEnums: Array<$Values<typeof proto_othercom_external_enum_pb.ExternalEnum>>,
}

export const EnumMessage_InternalEnum = Object.freeze({
  DEFAULT: 0,
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
})

export const EnumMessage_InternalEnum$ReverseLookUp = Object.freeze({
  "0": "DEFAULT",
  "1": "FIRST",
  "2": "SECOND",
  "3": "THIRD",
})

