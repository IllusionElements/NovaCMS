//schema def for Squad Collection
import { composeRosterSchema } from '/imports/db/defaultSchemas/roster.js'
import SimpleSchema from 'simpl-schema'

const Schema = composeRosterSchema({
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
