import { Collection } from 'meteor/mongo'
import { GamertagSchema } from './schema.js'

export const GamertagBlacklists = new Collection('gamertag_blacklist')

GamertagBlacklists.attachSchema(GamertagSchema);
