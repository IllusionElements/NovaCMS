import Squads from '../Squads.js';

export const squadListQuery = Squads.createQuery({
  $filter({ filters, options, params }) {
    filters._id = params._id;
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
    members: 1,
  }
})



//reducers.js
const reducer = ({ members }) => members.reduce((info, member) => {
  const { visable, security: { friendsList, isRisk } } = member
  const {
    count,
    blockedLists: bL,
    blacklistedFriends: bF,
    flaggedMembers: flagged
  } = info
  if (visable) {
    info.count = count + 1;
  }
  if (isRisk) {
    if (friendsList.isBlocked) {
      info.blockedLists = bL + 1
    }

    if (friendsList.blacklistedFriends.length > 0) {
      info.blacklistedFriends = bF + 1
    }

    info.flaggedMembers = [...flagged, member.name]
  }

}, { count: 0, blacklistedFriends: 0, blockedLists: 0, flaggedMembers: [] })

Squads.addReducers({
  stats: {
    body: {
      members: 1,
    },
    reduce: reducer,
  }
})
