import { Type } from '../'


export const callPromiseMixin = methodOptions => {
  const { name } = methodOptions
  const callPromise = function callPromise(args) {
    return new Promise((resolve, reject) => Type.isObject(args) ?
      reject(new Meteor.Error('invalid-arguments')) :
      this.call(args, (err, res) => err ? reject(err) : resolve(res)))
  }
  return Object.assign(methodOptions, { callPromise })
}
