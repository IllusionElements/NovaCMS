import RanksDisplayQuery from '../../db/Ranks/'

RanksDisplayQuery.expose({
  firewall(userId, params) {
    params.userId = userId
  },
  publication: true,
  unblock: true,
})
