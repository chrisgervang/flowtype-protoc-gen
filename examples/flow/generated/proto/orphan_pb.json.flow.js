// @flow
// package: 
// file: proto/orphan.proto

export type OrphanMapMessage = {
  primitiveInts: Array<[string, number]>,
}
export type OrphanMessage = {
  myString: string,
  myBool: boolean,
  myEnum: $Values<typeof OrphanEnum>,
}
export type OrphanUnaryRequest = {
  someInt64: number,
}
export type OrphanStreamRequest = {
  someString: string,
}

export const OrphanEnum = Object.freeze({
  UNKNOWN: 0,
  ONE: 1,
  TWO: 2,
})

export const OrphanEnum$ReverseLookUp = Object.freeze({
  "0": "UNKNOWN",
  "1": "ONE",
  "2": "TWO",
})

