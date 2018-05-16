import { Alert, alertQueries } from '../../db'
import { Security } from '/imports/api/security';
import { AlertStore } from '../server/events/AlertActions.js'
import { check } from 'meteor/check'

export class AlertService {
  static createAlert(data) {
    check(data, Object);
    const { uid } = data;
    const alertId = Alert.insert(data);
    AlertStore.dispatch('ALERT_CREATED', { alertId, uid })
    return alertId;
  }

  static deleteAlert({ uid, alertId }) {
    Security.checkRole(uid, 'Admin');
    Alert.deleteOne(alertId);
    AlertStore.dispatch('ALERT_DELETED', { alertId, uid });

    return alertId;
  }

  static updateAlert({ uid, alertId, data }) {
    const $alert = AlertService._getAlert({ alertId });
    if ($alert.userId !== uid) {
      Security.checkRole(uid, 'Admin')
    }

    Alert.updateOne(({ _id }) => _id === alertId, { ...data })
    return true;
  }

  static _getAlert({ alertId }) {

    const query = alertQueries.list
      .clone()
      .setParams({ alertId })


    return query.fetchOne();
  }

}
