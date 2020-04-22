// @flow
// package: examplecom
// file: proto/examplecom/simple_service.proto

import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb.flow.js";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
export type UnaryRequest = {
  someInt64: number,
  someTimestamp?: google_protobuf_timestamp_pb.Timestamp,
}
export type UnaryResponse = {
}
export type StreamRequest = {
  someString: string,
}

