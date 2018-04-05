import Alert from '/imports/db/alert/collection'

Alert.addLinks({
  'user': {
    type: 'one',
    collection: Meteor.users(),
    field: 'userId',
  }
})
