import EventEmitter from 'event-emitter';
import generateEvents from '../../../utils/helpers.js'

const AlertEmitter = new EventEmitter();

const AlertEvents = generateEvents(
  'alert',
  'create',
  'update',
  'delete',
  'created',
  'updated',
  'deleted'
);

export {
  AlertEmitter,
  AlertEvents
}
