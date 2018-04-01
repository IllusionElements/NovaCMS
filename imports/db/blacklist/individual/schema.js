import { composeSchema } from '../../defaultSchema/blacklist.js'
import SimpleSchema from 'simpl-schema'

export const GamertagBlacklist = composeSchema({
  "gamertag": {
    type: String,
    label: "Blacklisted Individual's Gamertag",
  },
  "console": {
    type: String,
    optional: true,
  },
  "allowedAppealDate": {
    type: Date,
    optional: true,
    label: "Date Blacklist Authorized"
  },
  "comments": {
    type: String,
    optional: true,
  }

});
