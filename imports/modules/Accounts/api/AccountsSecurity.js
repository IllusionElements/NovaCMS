const has = (obj, prop) => {
  const { hasOwnProperty } = {}
  return hasOwnProperty.call(obj, prop) && !!obj[prop]
}

const throwError = (code, arg) => { throw new Meteor.Error(code, arg) }
class AccountSecurityService {
  static isUserBanned = ({ user }) => has(user, 'isBanned')
    ? throwError('403', "you're banned")
    : false
}

export default AccountSecurityService
