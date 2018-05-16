import { makeEventAction } from '/imports/utils'
import { Events } from './constants.js'


const makeSquadEvent = (type, ...args) => makeEventAction(Events[type], 'squad._id', ...args)
export const createSquad = makeSquadEvent('SQUAD_INSERTED', 'user._id')
export const editSquad = makeSquadEvent('EDIT_SQUAD')
export const deleteSquad = makeSquadEvent('DELETE_SQUAD')
export const removeSquad = makeSquadEvent('REMOVE_SQUAD')
export const addSquad = makeSquadEvent('ADD_SQUAD', 'squad._id')
export const squadTransfer = makeSquadEvent(Events.SQUAD_TRANSFER, 'member._id', 'squad')
export const transferMember = makeEventAction(Events.SQUAD_MEMBER_TRANSFER, 'member._id', 'fromSquad', 'toSquad')
export const squadDeleted = makeSquadEvent('SQUAD_DELETED', 'user._id') // TO-DO: ADD ARGS
export const squadUpdated = makeSquadEvent('SQUAD_UPDATED', 'user._id')
export const squadRenamed = makeSquadEvent('SQUAD_RENAMED', 'user._id')
