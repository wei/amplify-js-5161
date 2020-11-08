// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const EventType = {
  "WEDDING": "WEDDING"
};

const EventShift = {
  "NIGHT": "NIGHT"
};

const { Event, Table } = initSchema(schema);

export {
  Event,
  Table,
  EventType,
  EventShift
};