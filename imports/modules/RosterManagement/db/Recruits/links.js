import Recruits from './'
import { Members, Squads } from '../Members'

Recruits.addLinks({
  recruiterName: {
    type: 'one',
    collection: Members,
    field: 'recruiterId',
  },

  squad: {
    type: 'one',
    collection: Squads,
    field: 'squadId',
  },
},)
