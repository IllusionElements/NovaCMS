import { Collection } from 'meteor/mongo'
import SquadSchema from './schema.js'

export const Squads = new Collection('squad')

Squads.attachSchema(SquadSchema)
