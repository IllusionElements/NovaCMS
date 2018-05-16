import { Security } from '/imports/api/security';
import { check, Match } from 'meteor/check'
import { MemberStore, MemberEvents } from '../events'
import { Members, DeletedMembers } from '../../../db'
import { MemberServiceModel } from './MemberServiceModel.js'
// TO-DO: CREATE & IMPORT FUNCTIONS
export const MemberService = new MemberServiceModel({
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

