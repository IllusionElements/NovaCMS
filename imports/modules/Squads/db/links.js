import { Squad } from '..'
import { Members } from '../modules/Members/db'
import { Ranks } from '../../db/ranks';
import { Division } from '../../Divisions/db'
Squad.addLinks({
  members: {
    type: 'many',
    field: 'squadMembers',
    collection: Members,
  },
  division: {
    inversedBy: 'division',
    collection: Division,
  }
})


Squad.addReducer({
  membersList: {
    body: {
      members: {
        name: 1,
        gametype: 1,
        rank: 1,
        dateAdded: 1,
        body: 1,
      },
    },
    reduce(object) {
      const rankList = Ranks.createQuery({
        _id: 1,
        name: 1,
      }).fetch().reduce((acc, rank) => ({
        ...acc,
        [rank.name]: [],
      }), {})

      return object.members.reduce(($ranks, member) => {
        const rankIndex = $ranks[member.rank]
        $ranks[member.rank] = [...rankIndex, member]
        return $ranks;
      }, rankList)
    }
  }
})
