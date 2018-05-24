// @flow
// import { Security } from '/imports/api/security/index.js'
import { MemberStore /* , MemberEvents */ } from '../events'
import {
  Squads,
  /* , DeletedMembers */
  SquadsQuery,
} from '../../../db/Squads'
// import { RanksDisplayQuery } from '/imports/db/Ranks/queries.js' TO-DO:
// CREATE & IMPORT FUNCTIONS
/* eslint-disable  no-underscore-dangle */
/* eslint-disable */
const Promisify = (fn) => new Promise((resolve, reject) => (fn((err, res) => {
  if (err)
    reject(err)
  resolve(res)
})))

const getSquadFrom = params => SquadsQuery //eslint-disable-line
  .clone(params)
  .fetch()
/* eslint-enable */
type CreateSquadType = {
  squadInfo: {},
  userId: string
};
type SetType = {
  name: string
};
type UpdateSquadType = {
  _id: string,
  $set: SetType
};

type IdType = {
  _id: string
};

type TransferType = {
  fromSquad: IdType,
  toSquad: IdType
};
type SquadPropsType = {
  transfer: TransferType,
  member: IdType,
  userId: IdType
};


interface SquadServiceInterface {
  store: () => mixed,
  createSquad(CreateSquadType) : {},
  deleteSquad(IdType) : string | boolean,
  updateSquad(UpdateSquadType) : string,
  membersList({_id: string}) : {},
  squadTransfer(SquadPropsType) : typeof undefined
}
/* eslint-disable class-methods-use-this */
class SquadServiceModel implements SquadServiceInterface {
  store: () => mixed

  createSquad = ({ squadInfo, userId }: CreateSquadType) => {
    // Security.hasPermissions(userId)
    const newSquad = Object.assign({}, squadInfo, {
      userId,
      dateCreated: new Date().getTime(),
    })
    return Promisify((c: () => mixed) => Squads.insert(newSquad, c))
  }

  deleteSquad = (params: {}): string | boolean => {
    const { _id }: IdType = getSquadFrom(params)
    return Squads.remove(_id, this)
  }

  updateSquad = ({ _id, $set }: UpdateSquadType) => (
    Squads.update(_id, $set)
  )

  membersList = ({ _id }: IdType) => (
    getSquadFrom({ _id }).members
  )

  squadTransfer = ({
    transfer, member: {
      _id,
    }, userId,
  }: SquadPropsType = {}) => {
    const { fromSquad, toSquad } = transfer
    MemberStore.dispatch('MEMBER_TRANSFERRED', {
      _id,
      from: fromSquad._id,
      to: toSquad._id,
      by: userId,
    })
  }

  /*
    static checkBackgrounds
    static getBackgroundStatus
    static renameSquad
  */
}

export default SquadServiceModel
// let is = (cond) => ({   between(x, y) {     return x < cond && cond < y   },
//  $lt: x => cond < x,   $gt: y => cond > y, }) class AdministrationService {
// notifyDivisionStaff({ from, to, by }) {     const staff =
// SquadService.getSquad('leaders')     const { gamertag } =
// MemberService.find(by)     let div = 0     const divisionalStaff = staff
//  .filter((member) => is(member.rank).between(11, 14) &&
// Match(member.division, div))     this.sendNotification(divisionalStaff,
// `${gamertag} was transferred from ${from} to ${to}`)   } }
// MemberStore.subscribe('MEMBER_TRANSFERRED', (transferDetails) => {   /*
// global LogService, */   LogService.logAction('transfer', transferDetails)
// AdministrationService.notifyDivisionStaff('transfer', transferDetails) })