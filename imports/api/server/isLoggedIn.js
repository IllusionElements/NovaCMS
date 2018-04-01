export const isLoggedIn = (userId) => {
  if (!userId) throw Meteor.Error('not-allowed');
}
