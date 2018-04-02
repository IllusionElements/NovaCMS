import EventEmitter  from 'event-emitter';
import { generateEvents } from '../../../../utils/helpers.js'

export const AlertEmitter = new EventEmitter();
console.log(AlertEmitter)
export const AlertEvents = generateEvents(
  'alert',
  'create',
  'update',
  'delete',
  'created',
  'updated',
  'deleted'
);



