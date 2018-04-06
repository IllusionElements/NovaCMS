import { Members } from './collection.js';
import { Squad } from '../../../db';
import { Ranks } from '../../ranks'
Members.addLinks({
  squads: {
    collection: Squad,
    inversedBy: 'squadMembers',
  },
  rankName: {
    type: 'one',
    field: 'rankId',
    collection: Ranks,
  },
})

Members.addReducer({
  rank: {
    body: {
      rankName: {
        name: 1,
      },

    }
  }
})
