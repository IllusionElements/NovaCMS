import AlertSchema from './schema.js';
import { Collection } from 'meteor/mongo';

export const Alert = new Collection('alerts')
Alert.attachSchema(AlertSchema)
