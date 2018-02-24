// Definition of the links collection

// Definition of the links collection

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

const Links = new Mongo.Collection('links');

const handleError = (error, result) => {
  if (error) throw new Meteor.Error(error.error);
  return result;
};
const insertLink = (collection, object) => {
  const { title, url } = object;
  check(title, String);
  check(url, String);
  return collection.insert({
    ...object,
    createdAt: new Date(),
  });
};





export {
  handleError,
  insertLink,
  Links,
};
