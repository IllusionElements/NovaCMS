// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.

import { Meteor } from 'meteor/meteor'
// import { Ranks, Recruits } from '/imports/db'
// import { Squad, Members } from 'modules/RosterManagement/db'

export const createUniqueIndex = (collection, key) => (
  collection
    .rawCollection()
    .createIndex(key, { unique: true })
)
export const createIndex = (collection, key) => collection.rawCollection().createIndex(key)
const createIndicies = (collection, { ...keys }) => collection.rawCollection().createIndexes(keys)

Meteor.startup(() => {
  import('/imports/db').then(({ Ranks, Recruits }) => {
    createUniqueIndex(Ranks, { rankId: 1 })
    createUniqueIndex(Recruits, { recruitId: 1 })
    createIndicies(Recruits, {
      recruiterId: 1,
      squadId: 1,
    })
  })

  import('/imports/modules/RosterManagement/db').then(({ Squad, Member }) => {
    createUniqueIndex(Member, 'gamertag')
    createUniqueIndex(Squad, 'name')
  })
})
