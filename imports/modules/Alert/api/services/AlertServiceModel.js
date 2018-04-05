//For testing Only
import { AlertService } from './AlertService.js'
import { changeStaticMethod as $class } from '../../../../utils'
export class AlertServiceModel extends $class(AlertService).compose() {
  constructor(notifyMembersStub) {
    this.notifyMembersStub = notifyMembersStub;
  }
};
