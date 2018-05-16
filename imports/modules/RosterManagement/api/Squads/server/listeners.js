// import CodeService from '/imports/api/codes'
import { MemberStore, Events } from '../events'

MemberStore.subscribe(Events.ADD_MEMBER, ({
  // member: { code },
  user,
}) => {
  import('/imports/api/security').then(Security => Security.userHasPermision('addMemberToSquad', user._id))
  // CodeService.isValidCode(code)
  // CodeService.doesCodeExist(code)
})

MemberStore.subscribe(Events.MEMBER_INSERTED)
MemberStore.subscribe(Events.MEMBER_UPDATED)
MemberStore.subscribe(Events.GET_MEMBER_FRIENDSLIST)
MemberStore.subscribe(Events.MEMBER_BACKGROUND)
MemberStore.subscribe(Events.MEMBER_TRANSFER_SQUAD)
MemberStore.subscribe(Events.MEMBER_TRANSFER_DIVISION)
