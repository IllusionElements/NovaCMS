import { Mongo } from 'meteor/mongo'
import SquadSchema from './schema.js'

const Squads = new Mongo.Collection('squad')

export default Squads

Squads.attachSchema(SquadSchema)
