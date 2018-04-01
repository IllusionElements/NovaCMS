import { MemberStore, Events } from './events'
import Members from '../db'
//TO-DO: CREATE & IMPORT FUNCTIONS
let isSquadGeneral, isAdmin;

export class MemberService {
  static createMember({ userId, memberData }) {
    Members.insert(memberData)
    //TO-DO Additional Validation on memberData & create listeners
    MemberStore.dispatch(Events.MEMBER_INSERTED, { userId, name: memberData.name })
  }
  static updateMember({ userId, mbrId, ...params }) {
    const member = this._getMember(mbrId)
    Members.update(mbrId, { ...params })

    //TO-DO Additional Validation on params & create listeners
    MemberStore.dispatch(Events.MEMBER_UPDATED, { userId, mbrId })
  }
  static removeMember({ userId, mbrId }) {
    if (!isSquadGeneral(userId)) throw Meteor.Error('not-allowed')
    Members.update(mbrId, { isVisible: false })
    MemberStore.dispatch(Events.MEMBER_REMOVED, { userId, mbrId })
  }
  static deleteMember({ userId, mbrId }) {
    isAdmin(userId)
    Members.delete(mbrId)
    MemberStore.dispatch(Events.MEMBER_DELETED, { userId, mbrId })
  }

  //TODO: add _getMember Method
}
