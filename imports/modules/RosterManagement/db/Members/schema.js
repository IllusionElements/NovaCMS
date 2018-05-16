import SimpleSchema from 'simpl-schema'
import { Type } from '@novacms/types'

const Schema = {
  Mixins: {
    createMixin(name, mixin) {
      this[name] = mixin
    },
  },
}

Schema.Mixins.createMixin('optional', type => ({
  type,
  optional: true,
}))

const makeOptionalString = field => ({
  [field]: {
    ...Schema.Mixins.optional(String),
  },
})
// Schema Def
/* eslint-disable */


Schema.Roster = new SimpleSchema({
  division: String,
  squad: String,
})

Schema.Members = new SimpleSchema({
  "gamertag": String,
  "rankId": Number,
  "recruits": [String],
  "recruiter": String,
  "dateAdded": Date,
  "roster": Schema.Roster,
  ...makeOptionalString('background'),
  ...makeOptionalString('notes'),
})
export const MemberSchema =  Schema.Members

