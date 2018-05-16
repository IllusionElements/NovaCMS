import { Squads } from './'
import { Members } from '../Members/collection.js'
import { Division } from '../Divisions/collection.js'

export default Squads.addLinks({
  members: {
    type: 'many',
    field: 'SquadsMembers',
    collection: Members,
  },
  division: {
    inversedBy: 'division',
    collection: Division,
  },
})
