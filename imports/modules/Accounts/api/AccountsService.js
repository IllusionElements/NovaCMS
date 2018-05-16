import UserAccountsQuery from '..'
const getUser = user => UserAccountsQuery
  .clone(user)
  .fetch()
class AccountsService {
  constructor({ Accounts, Store, Events }) {
    this.Accounts = Accounts
    this.Store = Store
    this.Events = Events
  }

  updateUser = (user, data) => {}

  suspendUser(user, admin) {
    const userData = getUser(user)
    const { _id } = userData
    const suspendedUser = {
      ...userData,
      isSuspended: true,
    }
    this.Store.dispatch(this
      .Events
      .userSuspended(user, admin))

    return this.updateUser(_id, suspendedUser)
  }

  banUser = (user, admin, ipban) => {
    const userData = getUser(user)
    const bannedUser = {
      ...userData,
      isSuspended: true,
      isBanned: true,
    }
    if (ipban) this.ipban(userData.ip)
    const userBanned = this.Events.userBanned(bannedUser, admin)
    this.Store.dispatch(userBanned)

    return `${userData.username} has been banned successfully!`
  }
}

// 'ban method'

// // banUser = user => {
// //   const admin = this.userId()
// //   Security.isAdmin(user
// //   Security.isSuperAdmins(user, admin)
// //   Security.isSystemAdmin(admin)
// //   return AccountsService.banUser(user, admin, false)
// // }
