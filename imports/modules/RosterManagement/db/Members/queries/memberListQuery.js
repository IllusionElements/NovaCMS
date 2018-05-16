import { Member } from '../collection.js'

export const memberListQuery = Member.createQuery('SquadMembers', {
  $filter({ filters, params }) {
    filters.roster.squad.id = params.squad.id
  },
  filters: {
    roster: {
      squad: {},
    },
  },
  gamertag: 1,
  rankId: {
    name: 1,
  },
  recruiter: 1,
  dateAdded: 1,
  roster: {
    division: 1,
    squad: 1,
  },
  background: 1,
  notes: 1,
})
