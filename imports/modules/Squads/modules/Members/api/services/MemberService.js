import { Security } from '../../../../../api';
import { MemberStore, MemberEvents } from './events'
import { Members, DeletedMembers } from '../db'

//TO-DO: CREATE & IMPORT FUNCTIONS
export class MemberService {

  static createMember({ userId, memberData }) {
    if (this._getMember(memberData.gamertag)) throw new Meteor.Error(`duplicate entry for ${memberData.gamertag}`);
    Members.insert(memberData)
    //TO-DO Additional Validation on memberData & create listeners
    const { name, security } = memberData
    MemberStore.dispatch(MemberEvents.MEMBER_INSERTED, { userId: this.userId, name, security })
  }

  static updateMember({ userId, mbrId, ...params }) {
    const today = new Date();
    Members.update(mbrId, {
      $set: {
        ...params,
        date: today.getTime(),
      }
    })
    //TO-DO Additional Validation on params & create listeners
    MemberStore.dispatch(MemberEvents.MEMBER_UPDATED, { userId, mbrId })
  }

  static removeMember(mbrId, userId) {
    const member = this._getMember()
    member.isVisible = false;
    DeletedMembers.insert(member);
    Members.remove(mbrId);
    MemberStore.dispatch(MemberEvents.MEMBER_REMOVED, { userId, mbrId })
  }

  //TODO: add _getMember Method
  static _getMember({ gamertag, mbrId }) {
    return Members.createQuery({
      $filter: gamertag || mbrId,
    }).clone().fetchOne();
  }
}
