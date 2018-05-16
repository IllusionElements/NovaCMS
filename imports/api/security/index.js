import { Roles } from 'meteor/alanning:roles' // eslint-disable-line
import { IPBanQuery, Codes, DivisionQuery } from '../../db'
/* global Meteor */
export default class Security {
    static AuthError = new Meteor.Error('not-authorized')
    static $Error = (...err) => Meteor.Error(this.AuthError, ...err)
    static isAdmin({ userId }) {
      if (!this.hasRole(userId, 'cms-admin')) {
        throw this.AuthError
      }
    }

    static checkRole({ userId, role }) {
      if (!this.hasRole(userId, role)) {
        throw this.AuthError
      }
    }

    static hasPermissions = (userId, permissions = []) => (
      Roles.userIsInRole(userId, ...permissions, Roles.permissions)
    )

    static isIPBanned({ ip }) {
      const isBanned = IPBanQuery.createQuery({ $filter: ip }).clone().fetchOne()
      return isBanned.status
    }

    static checkLoggedIn(userId) {
      if (!userId) {
        throw new this.$Error('You Are Not Authorized', 'You Must Be LoggedIn')
      }
    }

    static checkCode(code) {
      if (!Codes.isValid(code)) {
        throw new this.$Error('Invalid code')
      }
    }

    static hasRole(userId, role) {
      return Roles.userIsInRole(userId, role)
    }

    static isUserAllowedToSeeDivision(userId, divisionId) {
      const { authUsers } = DivisionQuery.createQuery({
        $filter: divisionId,
      }).clone().fetchOne()
      if (!authUsers.includes(userId)) {
        throw this.err
      }
    }
}
