import Meteor from 'meteor/meteor'
import AlertService from './services/AlertService'

Meteor.Methods({
  'alert.sendAlert' ({ userId, alertId }) {
    check(userId, String)
    check(alertId, String)
    return AlertService.sendAlert({ userId, alertId })
  }
})
