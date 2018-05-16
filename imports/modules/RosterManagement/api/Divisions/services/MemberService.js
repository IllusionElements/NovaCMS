import { Security } from '/imports/api/security';
import { check, Match } from 'meteor/check'
import { MemberStore, MemberEvents } from '../events'
import { Members, DeletedMembers } from '../../../db'
import { MemberServiceModel } from './MemberServiceModel.js'
//TO-DO: CREATE & IMPORT FUNCTIONS
export const MemberService = new MemberServiceModel({
  services: [Security],
  collections: [
    ['Members', Members],
    ['DeletedMembers', DeletedMembers]
  ],
  Event: {
    Emitter: MemberStore,
    events: MemberEvents,
  }
})


// class MemberService {

//   static createMember({ userId, memberData }) {
//     if (this._getMember(memberData.gamertag)) throw new Meteor.Error(`duplicate entry for ${memberData.gamertag}`);
//     Members.insert(memberData)
//     //TO-DO Additional Validation on memberData & create listeners
//     const { name, security } = memberData
//     MemberStore.dispatch(MemberEvents.MEMBER_INSERTED, { userId: this.userId, name, security })
//   }

//   static updateMember({ userId, mbrId, ...params }) {
//     const today = new Date();
//     Members.update(mbrId, {
//       $set: {
//         ...params,
//         date: today.getTime(),
//       }
//     })
//     //TO-DO Additional Validation on params & create listeners
//     MemberStore.dispatch(MemberEvents.MEMBER_UPDATED, { userId, mbrId })
//   }

//   static removeMember(mbrId, userId) {
//     const member = this._getMember()
//     member.isVisible = false;
//     DeletedMembers.insert(member);
//     Members.remove(mbrId);
//     MemberStore.dispatch(MemberEvents.MEMBER_REMOVED, { userId, mbrId })
//   }

//   static checkBackground(member) {
//     const blacklist = ['XGN', 'sam', 'dude'];
//     const { friendsList } = member;
//     Match.test(friendsList, Object)
//     if (friendsList.status === 'blocked' || friendsList.friends.error) {
//       throw new Meteor.Error('Warning: Blocked Friendslist')
//     } else {
//       const matchedFriends = []
//       friendsList.friends.forEach((friend) => blacklist.includes(friend.name) ?
//         matchedFriends.push(friend.name) : ''
//       )

//       if (matchedFriends.length > 0) throw new Meteor.Error(`blacklisted members present: ${matchedFriends}`)
//     }

//     return 'no blacklisted friends'
//   }

//   //TODO: add _getMember Method
//   static _getMember({ gamertag, mbrId }) {
//     return Members.createQuery({
//       $filter: gamertag || mbrId,
//     }).clone().fetchOne();
//   }
// }
