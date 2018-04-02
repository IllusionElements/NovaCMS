/* eslint-disable import/extensions */
// Server entry point, imports all server code
import '../imports/startup/server'
import '../imports/startup/both'


Meteor.methods({
  'console.log'(dats){
    console.log(dats)
  }
})