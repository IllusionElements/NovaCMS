import { Security } from '/imports/api/security/index.js';
import { MemberStore, MemberEvents } from '../events'
import { Squads, DeletedMembers, SquadsQuery } from '../../../db'
import { MemberService } from '../../Members/services/MemberService.js'
import { RanksDisplayQuery } from '/imports/db/Ranks/queries.js'
// TO-DO: CREATE & IMPORT FUNCTIONS
/* eslint-disable  no-underscore-dangle */
const Promisify = fn => new Promise((resolve, reject) => (
  fn((err, res) => err ? reject(err) : resolve(res))
))

const promisify = (fn, params) => {
  const cb = (err, res) => new Promise((resolve, reject) => err ? reject(err) : resolve(res))
  return fn.call(cb, params)
}

const getSquadFrom = (params) => SquadsQuery
  .clone(params)
  .fetch()

class SquadService {
  static createSquad({ squadInfo, userId }) {
    Security.hasPermissions(userId)
    const newSquad = Object.assign({}, squadInfo, { dateCreated: new Date().getTime() })
    return Promisify(c => Squads.insert(newSquad, c))
  }

  static deleteSquade(params) {
    const { _id } = getSquadFrom(params)
    return Squads.remove(_id, this)
  }

  static updateSquad({ _id, $set }) {
    const squad = getSquadFrom({ _id });
    return Squads.update(_id, $set);
  }

  static updateRank = ({ member, rank }) => MemberService.updateRank({
    name: member.gamertag,
    rank,
  })

  static membersList({ _id }) {
    return getSquadFrom({ _id }).members
  }

  static squadTransfer({ transfer, member, userId } = {}) {
    const { fromSquad, toSquad } = transfer
    const { _id } = member;
    // MemberStore.dispatch('MEMBER_TRANSFERRED', {
    //   from: fromSquad.name,
    //   to: toSquad.name,
    //   by: userId,
    // })
    return MemberService.modify(_id, 'squad', toSquad)
  }

  /*
    static checkBackgrounds
    static getBackgroundStatus
    static renameSquad
  */
}

export default SquadService
let is = (cond) => ({
  between(x, y) {
    return x < cond && cond < y
  },
  $lt: x => cond < x,
  $gt: y => cond > y,
})

// class AdministrationService {
//   notifyDivisionStaff({ from, to, by }) {
//     const staff = SquadService.getSquad('leaders')
//     const { gamertag } = MemberService.find(by)
//     let div = 0;
//     const divisionalStaff = staff
//       .filter((member) => is(member.rank).between(11, 14) && Match(member.division, div))
//     this.sendNotification(divisionalStaff, `${gamertag} was transferred from ${from} to ${to}`)
//   }
// }

// MemberStore.subscribe('MEMBER_TRANSFERRED', (transferDetails) => {
//   /* global LogService, */
//   LogService.logAction('transfer', transferDetails)

//   AdministrationService.notifyDivisionStaff('transfer', transferDetails)
// })
