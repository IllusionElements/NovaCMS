import { Mongo } from 'meteor/mongo'
import BackgroundSchema from './schema.js'

const Background = new Mongo.Collection('background')

export default Background
