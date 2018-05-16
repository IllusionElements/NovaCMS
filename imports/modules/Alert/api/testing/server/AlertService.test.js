/* eslint-disable func-names */
import { assert } from 'chai'
import md5 from 'md5'
import { resetDatabase } from 'meteor/xolvio:cleaner'
import AlertService from '../../services/AlertServiceModel.js'
import testData from './testData.js'

const testFactory = function (_name, itDes) {
  return function ({ testModule, assertion }) {
    const { name, method } = testModule
    return obj => (
      describe(_name, () => {
        after(() => {
          resetDatabase()
        })
        it(itDes, () => {
          const data = name[method](obj)
          assertion(data)
        })
      })
    )
  }
}

const db = {
  createQuery: '',
  insert: '',
  remove: '',
  update: '',
}

function store() {
  function dispatch() {}
  return { dispatch }
}

const AlertServiceTest = new AlertService({ db, store })

console.log(AlertServiceTest);
(function (window, $, { AlertServiceModel }) {
  const AlertFactory = $(
    'Alert Service',
    'Should be able to create an alert',
  )
  const ALERT_CREATED = AlertFactory({ testModule: { name: AlertServiceModel, method: 'createAlert' }, assertion: assert.isString })

  return ALERT_CREATED(testData)
}(this, testFactory, { AlertServiceModel: AlertServiceTest }))


const initFactory = {
  Alert({ description, name, service }) {
    return (method, data) => {
      const testModule = {
        name: service,
        method: method.serviceMethod,
      }

      const params = {
        testModule,
        assertion: assert[method.assert],
      }
      const testFactoryInitiateWith = testFactory(name, description)(params)
      return testFactoryInitiateWith(data)
    }
  },
}

const AlertFactory = initFactory.Alert({
  description: 'should return the collection',
  name: 'Alert Service',
  service: AlertServiceTest,
})

const getAlert = data => AlertFactory({
  serviceMethod: '_getAlert',
  assert: 'isObject',
}, data)
const testData2 = Object.assign({ userId: md5(new Date().getTimezoneOffset()) }, testData)
const alertId = AlertServiceTest.createAlert(testData2)

getAlert({ alertId })
