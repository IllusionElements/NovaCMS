import { AlertsSchema } from './schema.js';
import { Mongo } from 'meteor/mongo';

const { Collection } = Mongo

export const Alert = new Collection('alerts')

Alert.attachSchema(AlertsSchema)
