import { Mongo } from 'meteor/mongo'

export const Divisions = new Mongo.Collection('division')

Divisions.attachSchema()


const getAPIKey = key => Meteor.settings.private[key].apiKey
