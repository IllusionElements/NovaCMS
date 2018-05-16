import Schema from './schema.js'

const Collections = import('meteor/mongo').then(({Collection})=> new Collection())
export default Collections
