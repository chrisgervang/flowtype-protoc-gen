// @flow
// package: examplecom
// file: proto/examplecom/map_message.proto

import * as proto_othercom_external_enum_pb from "../../proto/othercom/external_enum_pb.flow.js";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb.flow.js";
export type MapMessage = {
  internalEnums: Array<[number, $Values<typeof MapMessage$AsClass_InternalEnum>]>,
  internalChildren: Array<[string, MapMessage$AsClass_InternalChildMessage]>,
  externalEnums: Array<[number, $Values<typeof proto_othercom_external_enum_pb.ExternalEnum>]>,
  externalChildren: Array<[string, proto_othercom_external_child_message_pb.ExternalChildMessage]>,
  primitiveInts: Array<[string, number]>,
}
export type MapMessage_InternalChildMessage = {
  myString: string,
}

export const MapMessage_InternalEnum = Object.freeze({
  DEFAULT: 0,
  FIRST: 1,
  SECOND: 2,
})

export const MapMessage_InternalEnum$ReverseLookUp = Object.freeze({
  "0": "DEFAULT",
  "1": "FIRST",
  "2": "SECOND",
})

