import { Squads } from '../'

export default Squads.createQuery('Squad List', {
  $filter({ filters, params }) {
    filters.squadId = params.squadId
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
