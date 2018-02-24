import { Meteor } from 'meteor/meteor';
import {
  Links,
  handleError,
} from '../../../../imports/api/collectionName/links.js';
import './info.html';


Template.info.onCreated(() => {
  Meteor.subscribe('links.all');
});

Template.info.events({
  'click button': (event) => {
    const { title, url } = event.target;
    const value = {
      title: title.value,
      url:   url.value,
    };
    const res = Meteor.call(Links, value, handleError);
    if (res) {
      title.value = '';
      url.value = '';
    }
  },
});

Template.info.helpers({
  links () {
    return Links.find({});
  },
});

