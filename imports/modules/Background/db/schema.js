import SimpleSchema from 'simpl-schema'
const defineArraySchema = ({ ...options }) => {
  const { name, type, ...rest } = options
  const arraySchema = `${name}.$`
  const base = Object.assign({ type: Array }, rest)
  return ({
    [name]: base,
    [arraySchema]: type,
  })
}
const Schema = {}
Schema.BaseBackground = {
  xuid: String,
  AccountTier: {
    type: String,
    allowedValues: ['Silver', 'Gold'],
  },
  Gamerscore: SimpleSchema.oneOf(SimpleSchema.Integer, String),
  Bio: String,
  Location: String,
  userId: String,
  notes: String,
  friendsList: Object,
  'friendsList.status': {
    type: SimpleSchema.Integer,
    allowedValues: [1, 2],
  },
}

Schema.Background = Object.assign(
  {},
  Schema.BaseBackground,
  defineArraySchema({
    name: 'friendsList.blacklistedMembers',
    type: String,
    min: 0,
    defaultValue: [],
  }),
  defineArraySchema({
    name: 'friendsList.blacklistedClans',
    min: 0,
    defaultValue: [],
  }),
)

const BackgroundSchema = new SimpleSchema(Schema.Background);

export default BackgroundSchema
