import GamertagBlacklists from '../blacklist.js'

const gamertagBlacklistQuery = GamertagBlacklists.createQuery('fullGamertagBlacklist', {
  gamertag: 1,
  type: 1,
  console: 1,
  blkauth: 1,
  date: 1,
  allowedAppealDate: 1,
})

export default gamertagBlacklistQuery
