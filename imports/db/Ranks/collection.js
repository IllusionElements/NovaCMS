import { Mongo } from 'meteor/mongo'
import { RankSchema } from './schema'

const Ranks = new Mongo.Collection('rank')

export default Ranks

Ranks.attachSchema(RankSchema)
