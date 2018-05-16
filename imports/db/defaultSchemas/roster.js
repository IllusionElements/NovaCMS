import extendSchema from '@novacms/extendschema'

const composeRosterSchema = extendSchema({
  name: String,
  createdBy: Object,
  'createdBy.name': String,
  dateCreated: Date,
  visible: {
    type: Boolean,
    defaultValue: true,
  },
})

export default composeRosterSchema
