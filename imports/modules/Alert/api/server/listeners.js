import { Meteor } from 'meteor/meteor'
import { AlertEmitter, AlertEvents } from './events/AlertActions.js'

// import { notifyMembers } from '...'

const { ALERT_CREATED } = AlertEvents

AlertEmitter.on(ALERT_CREATED, ({ alertId, notifyMembers }) => (
  Meteor.call('console.log', notifyMembers({ alertId }))
))
