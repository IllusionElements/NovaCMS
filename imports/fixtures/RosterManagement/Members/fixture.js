import { Members } from '/imports/modules/db'
import { MemberData } from './fixture.js'

MemberData.forEach((member) => Members.insert(member));
