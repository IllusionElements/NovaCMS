// Client entry point, imports all client code

import '../imports/startup/client'
import '../imports/startup/both'


import _ from 'lodash'
const Promisify = {
    _callPromise(methodName, ...args) {
        return new Promise((resolve, reject) => (
            Meteor.apply(methodName, args, {}, (err, results) => {
                if (err) reject(err)

                resolve(results)
            })))
    }
}
_.extend(Meteor, Promisify);

const c = (method2) => (
    Meteor._callPromise({ method: 'GET', rss: '/posts' })
    .then(res => Meteor.call(method2, res))
    .catch(err => Meteor.call(method2, err))
)

c('log');
