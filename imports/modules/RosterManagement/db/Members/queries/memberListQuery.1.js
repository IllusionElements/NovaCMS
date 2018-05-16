import { Member } from '../collection.js'
import has from '@novacms/has'
import assign from '@novacms/assign'
export const memberQuery = Member.createQuery('Member', {
  $filter({ filters, params }) {
    if (has(params, '_id')) {
      const $filters = {
        ...filters,
        _id: params._id,
      }
      assign($filters, filters)
    }
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
