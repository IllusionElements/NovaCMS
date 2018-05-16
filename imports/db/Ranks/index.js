import { Mongo } from 'meteor/mongo'
import { RankSchema } from './schema.js'

const Ranks = new Mongo.Collection('rank');

export default Ranks;

Ranks.attachSchema(RankSchema)
