import EventEmitter from 'event-emitter';
import { generateEvents, store } from '../../../../utils/helpers.js'

const AlertEvents = generateEvents(
  'alert',
  'create',
  'update',
  'delete',
  'created',
  'updated',
  'deleted'
);


export const AlertsStore = store(AlertEvents)
