import GamertagBlacklists from '../GamertagBlacklist.js'

export const gamertagBlacklistQuery = GamertagBlacklists.createQuery('fullGamertagBlacklist', {
  gamertag: 1,
  type: 1,
  console: 1,
  blkauth: 1,
  date: 1,
  allowedAppealDate: 1,
})
