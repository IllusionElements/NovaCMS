//schema.js
import { composeUnitSchema } from '../../../db/defaultSchemas/units.js'
import SimpleSchema from 'simpl-schema'

const Schema = composeUnitSchema({
  squadId: SimpleSchema.Integer,
  members: [Object],
  limit: {
    type: Number,
    min: 0,
    max: 200,
  },
  gametype: String,
  division: String,
})

export const SquadSchema = new SimpleSchema(Schema)
