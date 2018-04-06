import SimpleSchema from 'simpl-schema'

const Validate = function (...args) {
  return function () {
    return args.indexOf(this.key) !== -1;
  }
};;
const isStatus = Validate('Open', 'Blocked', 'Warn');
//Schema Def

export const MemberSchema = new SimpleSchema({
  "gamertag": String,
  "rankId": Number,
  "recruits": Object,
  "recruits.optional": true,
  "recruits.names": [String],
  "recruitedBy": String,
  "dateAdded": Date,
  "notes": {
    type: String,
    optional: true,
  },
  "division": Object,
  "division.name": String,
  "division.squad": String,
  "background": {
    type: Object,
    optional: true,
  },
  "background.friendsListStatus": {
    type: String,
    optional: true,
    custom: isStatus,
  },
  "background.blacklistedFriends": [Object],
  "gametype": String,
  "description": {
    type: String,
    optional: true,
  }
})
