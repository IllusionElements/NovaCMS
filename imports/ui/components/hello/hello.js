import  { ReactiveDict } from 'meteor/reactive-dict'
import './hello.html';

Template.hello.onCreated(() => {
  // counter starts at 0
  this.counter = new ReactiveDict(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) { // eslint-disable-line object-shorthand
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
