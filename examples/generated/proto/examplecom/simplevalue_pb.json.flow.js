// @flow
// package: examplecom
// file: proto/examplecom/simplevalue.proto

export type SimpleValue = {
  firstField: string,
  secondField: number,
  numberValue: number,
  stringValue: string,
  boolValue: boolean,
  number2Value: number,
  string2Value: string,
  bool2Value: boolean,
}

export const SimpleValue_KindCase = {
  KIND_NOT_SET: 0,
  NUMBER_VALUE: 3,
  STRING_VALUE: 6,
  BOOL_VALUE: 8,
}

export const SimpleValue_AnotherCase = {
  ANOTHER_NOT_SET: 0,
  NUMBER2_VALUE: 4,
  STRING2_VALUE: 5,
  BOOL2_VALUE: 7,
}

