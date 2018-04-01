import Alert from '/imports/db/alert/collection'
import { AlertEmitter, AlertEvents } from '/imports/api/alert/events/AlertActions.js'

export class AlertService {
  static createAlert(data) {
    check(data, Object);
    const { uid } = data;
    const _id = Alert.insert(data);
    AlertEmitter.on(AlertEvents.ALERT_CREATED, { _id, uid });
    return _id;
  }
  //TODO ADD REST OF THE METHODS
}
