import Members from './Members/collection.js'
import * as MemberQueries from './Members/queries.js'
import * as MemberLinks from './Members/links.js'
import * as MemberReducers from './Members/reducers'
import Squads from './Squads/collection.js'
import * as SquadQueries from './Squads/queries.js'
import * as SquadLinks from './Squads/links.js'
import * as SquadReducers from './Squads/reducers'
import Divisions from './Divisions/collection.js'
import * as DivisionQueries from './Divisions/queries.js'
import * as DivisionLinks from './Divisions/links.js'
import * as DivisionReducers from './Divisions/reducers'

const RosterManagement = (...names) => ({
  collections,
  queries,
  links,
  reducers,
}) => names.reduce((roster, name, index) => ({
  ...roster,
  [name]: {
    db: collections[index],
    queries: { ...queries[index] },
    links: { ...links[index] },
    reducers: { ...reducers[index] },
  },
}), {})

const generateRoster = RosterManagement('Members', 'Squads', 'Divisions')

export default generateRoster({
  collections: [Members, Squads, Divisions],
  queries: [MemberQueries, SquadQueries, DivisionQueries],
  links: [MemberLinks, SquadLinks, DivisionLinks],
  reducers: [MemberReducers, SquadReducers, DivisionReducers],
})
