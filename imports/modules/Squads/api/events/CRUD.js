import EventEmitter from 'event-emitter';
import { generateEvents, store } from '../../../utils/helpers.js'
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
