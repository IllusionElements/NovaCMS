import { makeEventAction } from '/imports/utils'
import * as Events from './constants'

export const insertedMember = makeEventAction(Events.MEMBER_INSERTED, 'user._id', 'member._id')
export const updatedMember = makeEventAction(Events.MEMBER_UPDATED, 'member._id', 'user._id', 'msg')
export const deletedMember = makeEventAction(Events.MEMBER_DELETED, 'member._id', 'user._id')
export const removedMember = makeEventAction(Events.MEMBER_REMOVED, 'member._id')
export const addMember = makeEventAction(Events.ADD_MEMBER, 'member.gamertag')
export const removeMember = makeEventAction(Events.REMOVE_MEMBER, 'member._id')
export const deleteMember = makeEventAction(Events.DELETE_MEMBER, 'member', 'user._id')
export const editMember = makeEventAction(Events.EDIT_MEMBER, 'member._id', 'params', 'user._id')
export const getMemberFriendslist = ({ ...args }) => ({
  type: Events.GET_MEMBER_FRIENDSLIST,
  ...args,
})
export const getMemberBackground = ({ ...args }) => ({
  type: Events.GET_MEMBER_BACKGROUND,
  ...args,
})
