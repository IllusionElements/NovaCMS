import { Security } from '/imports/api/security' // eslint-disable-lin
import { check, Match } from 'meteor/check' // eslint-disable-line
import { MemberStore, MemberEvents } from '../events'
import { Members, DeletedMembers } from '../../../db'
import { MemberServiceModel } from './MemberServiceModel'

// TO-DO: CREATE & IMPORT FUNCTIONS
const MemberService = new MemberServiceModel({
  services: [Security],
  collections: [
    ['Members', Members],
    ['DeletedMembers', DeletedMembers],
  ],
  Event: {
    Emitter: MemberStore,
    events: MemberEvents,
  },
})

export default MemberService
