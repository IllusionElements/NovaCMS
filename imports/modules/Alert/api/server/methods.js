import { Meteor } from 'meteor/meteor'
import check from 'meteor/check'

Meteor.Methods({
  'alert.sendAlert': ({ userId, alertId }) => {
    check(userId, String)
    check(alertId, String)
    return import('../services/AlertService').then(AlertService => AlertService.sendAlert({
      userId,
      alertId,
    }))
  },
})
