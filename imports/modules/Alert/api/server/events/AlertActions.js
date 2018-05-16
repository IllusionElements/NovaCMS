import { generateEvents, store } from '/imports/utils/'

const AlertEvents = generateEvents(
  'alert',
  'create',
  'update',
  'delete',
  'created',
  'updated',
  'deleted',
)


export const AlertsStore = store(AlertEvents)
