// @flow
// package: examplecom
// file: proto/examplecom/simple.proto

import * as google_protobuf_compiler_plugin_pb from "google-protobuf/google/protobuf/compiler/plugin_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_api_pb from "google-protobuf/google/protobuf/api_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_source_context_pb from "google-protobuf/google/protobuf/source_context_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_type_pb from "google-protobuf/google/protobuf/type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
export type MySimple = {
  myString: string,
  myBool: boolean,
  someLabels: Array<string>,
  someCodeGeneratorRequest?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest,
  someAny?: google_protobuf_any_pb.Any,
  someMethod?: google_protobuf_api_pb.Method,
  someGeneratedCodeInfo?: google_protobuf_descriptor_pb.GeneratedCodeInfo,
  someDuration?: google_protobuf_duration_pb.Duration,
  someEmpty?: google_protobuf_empty_pb.Empty,
  someFieldMask?: google_protobuf_field_mask_pb.FieldMask,
  someSourceContext?: google_protobuf_source_context_pb.SourceContext,
  someStruct?: google_protobuf_struct_pb.Struct,
  someTimestamp?: google_protobuf_timestamp_pb.Timestamp,
  someType?: google_protobuf_type_pb.Type,
  someDoubleValue?: google_protobuf_wrappers_pb.DoubleValue,
}

