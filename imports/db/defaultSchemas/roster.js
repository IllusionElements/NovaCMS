import extendSchema from '@novacms/extendschema'

export const composeRosterSchema = extendSchema({
  name: String,
  createdBy: Object,
  'createdBy.name': String,
  dateCreated: Date,
  visible: {
    type: Boolean,
    defaultValue: true,
  },
})
