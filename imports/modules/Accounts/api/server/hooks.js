import { Accounts } from 'meteor/accounts-base'
import AccountSecurityService from '../AccountsSecurityService.js'

Accounts.validateLoginAttempt(AccountSecurityService.isUserBanned)
