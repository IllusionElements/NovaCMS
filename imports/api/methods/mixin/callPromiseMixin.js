import { Type } from '@novacms/type-check'
import { Meteor } from 'meteor/meteor'

const callPromiseMixin = (methodOptions) => {
  const callPromise = function callPromise(args) {
    return new Promise((resolve, reject) => {
      const rejectError = new Meteor.Error('invalid-arguments')
      this.call(args, (err, res) => {
        if (Type.isObject(args)) reject(rejectError)
        if (err) reject(err)

        resolve(res)
      })
    })
  }
  return Object.assign(methodOptions, { callPromise })
}

export default callPromiseMixin
