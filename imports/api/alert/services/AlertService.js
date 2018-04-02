import { Alert } from '../../../db/alert/collection.js'
import { AlertEmitter, AlertEvents } from '../server/events/AlertActions.js'
import { check } from 'meteor/check'
import alertListsQuery from '../../../db/alert/queries/getAlert.js'

// export class AlertService {
//   static createAlert(data) {
//     check(data, Object);
//     const { uid } = data;
//     const alertId = Alert.insert(data);
//     AlertEmitter.on(AlertEvents.ALERT_CREATED, { alertId, uid });
//     return alertId;
//   }
//   //TODO ADD REST OF THE METHODS
// }


export default class AlertServiceModel {

  constructor(notifyMembersStub) {
    this.notifyMembersStub = notifyMembersStub;
  }

  createAlert(data) {
    check(data, Object);
    const notifyMembers = this.notifyMembersStub;
    const alertId = Alert.insert(data);
    //AlertEmitter.emit(AlertEvents.ALERT_CREATED, { alertId, notifyMembers });

    return alertId;
  }

  //TODO ADD REST OF THE METHODS

  _getAlert({ alertId }) {
    console.log(Meteor.isServer)
    const query = alertListsQuery
      .clone()
      .setParams({ alertId })
    //console.log(query.fetchOne())

    return Meteor.isServer ? query.fetchOne() : Meteor.Error('query not exposed')
  }
};
