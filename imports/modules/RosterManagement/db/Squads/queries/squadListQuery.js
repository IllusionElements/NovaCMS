import { Squads } from '../collection.js'

export const squadListQuery = Squads.createQuery('Squad List', {
  $filter({ filters, params }) {
    filters._id = params._id
  },
  $filters: {
    visable: true,
  },

  $options: {
    sort: {
      dateCreated: -1,
    },
    name: 1,
    gametype: 1,
    count: 1,
  },
})
