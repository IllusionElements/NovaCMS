import { RecruitsSchema } from './schema.js'
import { Mongo } from 'meteor/mongo'

const Recruits = new Mongo.Collection('recruit')

Recruits.attachSchema(RecruitsSchema)

export default Recruits
