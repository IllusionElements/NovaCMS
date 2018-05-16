import { Squads } from '../collection.js';

export const squadMemberListQuery = Squads.createQuery('getAllMembers', {
  $filters({ filter, options, params }) {
    filter.squadId = params.squadId;
  },
  name: 1,
  membersList: 1,
})
