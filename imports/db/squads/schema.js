//schema.js
import { composeUnitSchema } from '../defaultSchema/units.js'
import SimpleSchema from 'simpl-schema'

const Schema = composeUnitSchema({
  squadId: SimpleSchema.Integer,
  members: {
    type: Array,
    min: 0,
    max: 200,
  },
  gametype: String,
  division: String,
})

export const SquadSchema = new SimpleSchema(Schema)
