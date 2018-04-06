const getMembersFromSquad = Squad.createQuery('getAllMembers', {
  $filters({ filter, params }) {
    filter._id = params.squadId;
  },
  membersList: 1,
})

/*global Squad*/
