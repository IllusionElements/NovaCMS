import EventEmitter from 'event-emitter';
import { generateEvents, store } from '/imports/utils'
const MemberEvents = generateEvents(
  'member',
  'inserted',
  'deleted',
  'removed',
  'updated'
);

const MemberStore = new store(MemberEvents);

export default {
  MemberStore,
  MemberEvents
}
