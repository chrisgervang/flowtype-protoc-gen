// @flow
// package: examplecom
// file: proto/examplecom/repeated_primitive_message.proto

export type RepeatedPrimitiveMessage = {
  myDouble: Array<number>,
  myFloat: Array<number>,
  myInt32: Array<number>,
  myInt64: Array<number>,
  myUint32: Array<number>,
  myUint64: Array<number>,
  mySint32: Array<number>,
  mySint64: Array<number>,
  myFixed32: Array<number>,
  myFixed64: Array<number>,
  mySfixed32: Array<number>,
  mySfixed64: Array<number>,
  myBool: Array<boolean>,
  myString: Array<string>,
  myBytes: Array<Uint8Array | string>,
}

