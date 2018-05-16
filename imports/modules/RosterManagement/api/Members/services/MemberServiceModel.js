// eslint-disable no-underscore-dangle
import { check, Match } from 'meteor/check'
import moment from 'moment'
import dependancyInjector from '/imports/utils/extensions/dependancyInjector'
import { pipe } from '/imports/utils'

const noEmptyString = Match.where((x) => {
  check(x, String)
  return x.length > 0
})

export default class MemberServiceModel {
  constructor({ services, collections, Event }) {
    this.EventStore = Event.EventStore
    this.Events = Event.actions
    const dependancies = [collections, services]
    dependancies
      .forEach(dependancy => (
        dependancy.reduce(dependancyInjector, this)
      ))
  }

  insertMember({ memberData, userId = Meteor.userId() }) {
    if (this._getMember(memberData.gamertag)) {
      throw new Meteor.Error(`duplicate entry for ${memberData.gamertag}`)      
    }
    check(memberData, Object)
    check(userId, noEmptyString)
    this.Security.isAuthorizedToModifySquad({ userId })
    const member = Object.assign({}, memberData, {
      dateAdded: moment().format(),
    })
    const { name } = member
    pipe(
      this.EventStore.dispatch,
      this.Events.addMember,
    )(name)
    const memberId = this.Members.insert(memberData)
    this.EventStore.dispatch(this.Events.insertedMember(memberId, userId))
    return memberId
  }

  updateMember({ userId, memberId, ...params }) {
    [userId, memberId].forEach(id => (
      check(id, noEmptyString)
    ))

    Object.keys(params).forEach(key => (
      check(params[key], noEmptyString)
    ))
    const update = this.Members.update(memberId, {
      $set: {
        ...params,
      },
    })
    // TO-DO Additional Validation on params & create listeners
    this.EventStore.dispatch(this.Events.updateMember(userId, memberId))

    return update
  }

  removeMember(gamertag, userId) {
    const { _id } = this._getMember({ gamertag })
    pipe(
      this.EventStore.dispatch,
      this.Events.removeMember,
    )(_id)
    return _id
  }

  deleteMemberByName({ gamertag }) {
    const { _id } = this._getMember({ gamertag })
    const userId = Meteor.userId()
    this.EventStore.dispatch(this.Events.deletedMember(userId, _id))
    return this._removeByMongoID(_id)
  }

  _removeByMongoID = ({ _id }) => this.Members.remove(_id)


  deleteMemberById({ memberId }) {
    const userId = Meteor.userId()
    const { _id } = this._getMember({ memberId })
    const deletedMember = this.Events.deletedMember(_id, userId)
    this.EventStore.dispatch(deletedMember)
    return this._removeByMongoID({ _id })
  }

  // TODO: add _getMember Method
  _getMember = ({ gamertag = null, memberId = null }) => this.Members.createQuery({
    $filter: gamertag || memberId,
  }).clone().fetchOne()
}
