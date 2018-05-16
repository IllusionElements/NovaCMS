import SimpleSchema from 'simpl-schema'

const RankSchema = new SimpleSchema({
  id: Number,
  name: String,
  abbr: String,
})

export default RankSchema
