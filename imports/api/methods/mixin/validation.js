import SimpleSchema from 'simpl-schema'

const assign = assignmentObject => objectToAssign => (
  Object.assign({}, assignmentObject, objectToAssign)
)

const is = key => ({
  $in(obj) {
    return key in obj
  },
})

const validateSchema = (schema) => {
  const formattedSchema = Object
    .keys(schema)
    .reduce((Schema, key) => {
      const assignToSchema = assign(Schema)
      if (!is('type').$in(schema[key])) {
        return assignToSchema({
          type: schema[key],
        })
      }
      return assignToSchema(schema[key])
    }, {})

  return new SimpleSchema(formattedSchema).validator({ clean: true })
}

const validationMixin = (methodOptions) => {
  const { schema } = methodOptions

  const validate = validateSchema(schema)

  Object.assign(methodOptions, validate)
}

export default validationMixin
