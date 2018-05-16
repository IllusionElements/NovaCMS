import { Members } from '/imports/modules/RosterManagement/db'
import { MemberData } from './fixture.js'

MemberData.forEach(member => Members.insert(member))
