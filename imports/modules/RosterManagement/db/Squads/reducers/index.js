import { Squads } from '../collection.js'
import List from './memberList.js'
import Count from './count.js'

export default Squads.addReducer({
  membersList: List,
  memberCount: Count,
})
