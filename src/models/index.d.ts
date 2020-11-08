import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum EventType {
  WEDDING = "WEDDING"
}

export enum EventShift {
  NIGHT = "NIGHT"
}



export declare class Event {
  readonly id: string;
  readonly name: string;
  readonly notes?: string;
  readonly tables?: (Table | null)[];
  readonly type?: EventType | keyof typeof EventType;
  readonly eventDate: string;
  readonly shift?: EventShift | keyof typeof EventShift;
  constructor(init: ModelInit<Event>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

export declare class Table {
  readonly id: string;
  readonly number?: number;
  readonly seatCount?: number;
  readonly event: Event;
  readonly eventID?: string;
  constructor(init: ModelInit<Table>);
  static copyOf(source: Table, mutator: (draft: MutableModel<Table>) => MutableModel<Table> | void): Table;
}