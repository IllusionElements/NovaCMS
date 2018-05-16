import { Members } from './collection.js'
import { Squads } from '../Squads/collection.js'
import { Divisions } from '../Divisions/collection.js'
import { Ranks, Recruits } from '/imports/db'
import { has, linkerMixin } from '/imports/utils'
const checkProps = (object, key, target) => has.call(target, key) ? delete object[key] : false; // eslint-disable-line


const memberLinks = linkerMixin({

  links: [
    {
      linkName: 'squad',
      collection: Squads,
      inversedBy: 'squadMembers',
    },
    {
      linkName: 'rankName',
      type: 'one',
      field: 'rankId',
      collection: Ranks,
    },
    {
      linkName: 'recruits',
      type: 'many',
      field: 'recruits',
      collection: Recruits,
    },
    {
      linkName: 'division',
      type: 'one',
      field: 'roster.division',
      collection: Division,
    },
  ],

  /* *
  *  @index(type: Boolean)
  * */
  index: true,

  /* *
  *  @autoremove(type: Boolean)
  * */

  autoremove: true,

})
export default Members.addLinks(memberLinks)

