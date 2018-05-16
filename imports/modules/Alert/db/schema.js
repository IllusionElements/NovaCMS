import SimpleSchema from 'simpl-schema';
import { composeSchema } from '/imports/utils'

const dateSchema = composeSchema(Date, true)
const MessageSchema = (composer) => ({ ...args }) => {
  const { max, optional } = args
  return composer({ type: String, min: 0, max, optional, ...args })
}

const composeMessageSchema = MessageSchema(composeSchema)
//Main Schema Def
const Schema = {
  message: Object,
  'message.title': composeMessageSchema({ max: 32, optional: true, label: 'Alert Title (Optional)' }),
  'message.body': composeMessageSchema({ max: 500, optional: false, label: 'Alert Body (required)' }),
  userId: String,
  date: Object,
  'date.expiry': dateSchema,
  'date.onCreated': { ...dateSchema, optional: false },
  visible: Boolean,
};

export const AlertsSchema = new SimpleSchema({ _id: { type: String, optional: true }, ...Schema });
