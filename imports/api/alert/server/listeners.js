import { AlertEmitter, AlertEvents } from '/imports/api/alert/server/events/AlertActions.js'
//import { notifyMembers } from '...'

const { ALERT_CREATED } = AlertEvents

AlertEmitter.on(AlertEvents.ALERT_CREATED, ({ alertId, notifyMembers }) => {

  Meteor.call('console.log', notifyMembers({ alertId }));
})
