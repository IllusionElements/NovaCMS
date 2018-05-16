import SimpleSchema from 'simpl-schema';

export const RankSchema = new SimpleSchema({
  id: Number,
  name: String,
  abbr: String,
});
