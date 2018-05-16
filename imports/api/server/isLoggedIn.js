import { Meteor } from 'meteor/meteor'

const isLoggedIn = (userId) => {
  if (!userId) throw Meteor.Error('not-allowed')
}
export default isLoggedIn
