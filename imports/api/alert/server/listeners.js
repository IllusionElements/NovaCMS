import { AlertEmitter, AlertEvents } from '/imports/api/alert/server/events/AlertActions.js'
import { notifyMembers } from '...'
AlertEmitter.on(AlertEvents.ALERT_CREATED, ({ alertId }) => {
  notifyMembers({ alertId });
})
