import { Mongo } from 'meteor/mongo'
import BackgroundSchema from './schema.js'

const Background = new Mongo.Collection('background')

Background.attachSchema(BackgroundSchema)

export default Background
