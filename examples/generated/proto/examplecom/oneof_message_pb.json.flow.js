// @flow
// package: examplecom
// file: proto/examplecom/oneof_message.proto

import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb.flow.js";
export type OneOfMessage = {
  internalChildMessage?: OneOfMessage_InternalChildMessage,
  externalChildMessage?: proto_othercom_external_child_message_pb.ExternalChildMessage,
  myString: string,
  myInt64: number,
}
export type OneOfMessage_InternalChildMessage = {
  myString: string,
}

export const OneOfMessage_GroupCase = {
  GROUP_NOT_SET: 0,
  INTERNAL_CHILD_MESSAGE: 1,
  EXTERNAL_CHILD_MESSAGE: 2,
  MY_STRING: 3,
  MY_INT64: 4,
}
export type CamelCasedOneOfMessage = {
  anint: number,
  thestring: string,
}

export const CamelCasedOneOfMessage_CamelcasedmessageCase = {
  CAMELCASEDMESSAGE_NOT_SET: 0,
  ANINT: 1,
  THESTRING: 2,
}
export type SnakeCasedOneOfMessage = {
  anint: number,
  thestring: string,
}

export const SnakeCasedOneOfMessage_SnakeCasedMessageCase = {
  SNAKE_CASED_MESSAGE_NOT_SET: 0,
  ANINT: 1,
  THESTRING: 2,
}

