import { RanksDisplayQuery } from '/imports/db/queries.js'

const List = {
  body: {
    members: {
      name: 1,
      gametype: 1,
      rankId: {
        name: 1,
      },
      dateAdded: 1,
    },
  },
  reduce(object) {
    const params = {
      $options: {
        sort: {
          id: -1,
        }
      },
      name: 1,
    }

    const rankList = RanksDisplayQuery
      .clone(params)
      .fetch()
      .reduce((acc, rank) => ({
        ...acc,
        [rank.name]: [],
      }), {})

    return object.members.reduce(($ranks, member) => {
      const { rank } = member
      const rankIndex = $ranks[rank]
      $ranks[rank] = [...rankIndex, member]
      return $ranks;
    }, rankList)
  }
}

export default List
