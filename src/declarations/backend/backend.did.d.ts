import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Location { 'latitude' : number, 'longitude' : number }
export interface Report {
  'id' : string,
  'status' : string,
  'user' : [] | [UserId],
  'description' : string,
  'imageCid' : string,
  'rewardGiven' : [] | [number],
  'timestamp' : Time,
  'category' : string,
  'presentage_confidence' : string,
  'confidence' : string,
  'location' : string,
  'coordinates' : Location,
}
export type Time = bigint;
export type UserId = Principal;
export interface _SERVICE {
  'addReport' : ActorMethod<[string, Report], undefined>,
  'getReport' : ActorMethod<[string], [] | [Report]>,
  'getReportsThisWeek' : ActorMethod<[], Array<Report>>,
  'getValidReports' : ActorMethod<[], Array<Report>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
