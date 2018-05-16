import { MemberSchema } from './schema.js'

export const Members = new Mongo.Collection('member')

Members.attachSchema(MemberSchema)
