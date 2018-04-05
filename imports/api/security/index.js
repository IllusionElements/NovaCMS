import { Roles } from 'meteor/alanning:roles'
import { IPBan, IPBanQuery, Codes, DivisionQuery } from '../../db'

export class Security {
    static authError = Meteor.Error('not-authorized')
    static $Error = (...err) => Meteor.Error(this.authError, ...err)
    static isAdmin({ userId }) {
        if (!this.hasRole(userId, 'cms-admin')) {
            throw new this.authError;
        }
    }

    static checkRole({ userId, role }) {
        if (!this.hasRole(userId, role)) {
            throw new this.authError;
        }
    }

    static hasPermissions(userId, permissions = []) {
        return Roles.userIsInRole(userId, ...permissions, Roles.permissions);
    }

    static isIPBanned({ ip }) {
        const isBanned = IPBanQuery.createQuery({ $filter: ip, }).clone().fetchOne();
        return isBanned.status;
    }

    static checkLoggedIn(userId) {
        if (!userId) {
            throw new this.$Error('You Are Not Authorized', 'You Must Be LoggedIn')
        }
    }

    static checkCode(code) {
        if (!Codes.isValid(code)) {
            throw new this.$Error('Invalid code');
        };
    }

    static hasRole(userId, role) {
        return Roles.userIsInRole(userId, role);
    }

    static isUserAllowedToSeeDivision(userId, divisionId) {
        const { authUsers } = DivisionQuery.createQuery({
            $filter: divisionId,
        }).clone().fetchOne()
        if (!authUsers.includes(userId)) {
            throw new this.err;
        }
    }


}
