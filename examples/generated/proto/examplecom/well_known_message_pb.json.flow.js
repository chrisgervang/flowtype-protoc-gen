// @flow
// package: examplecom
// file: proto/examplecom/well_known_message.proto

import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_api_pb from "google-protobuf/google/protobuf/api_pb";
import * as google_protobuf_compiler_plugin_pb from "google-protobuf/google/protobuf/compiler/plugin_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_source_context_pb from "google-protobuf/google/protobuf/source_context_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_type_pb from "google-protobuf/google/protobuf/type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
export type WellKnownMessage = {
  myCodeGeneratorRequest?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest,
  myAny?: google_protobuf_any_pb.Any,
  myMethod?: google_protobuf_api_pb.Method,
  myGeneratedCodeInfo?: google_protobuf_descriptor_pb.GeneratedCodeInfo,
  myDuration?: google_protobuf_duration_pb.Duration,
  myEmpty?: google_protobuf_empty_pb.Empty,
  myFieldMask?: google_protobuf_field_mask_pb.FieldMask,
  mySourceContext?: google_protobuf_source_context_pb.SourceContext,
  myStruct?: google_protobuf_struct_pb.Struct,
  myTimestamp?: google_protobuf_timestamp_pb.Timestamp,
  myType?: google_protobuf_type_pb.Type,
  myDoubleValue?: google_protobuf_wrappers_pb.DoubleValue,
}

