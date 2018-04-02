import AlertService from '../../services/AlertService.js'
import { assert } from 'chai'
import testData from './testData.js'
import { resetDatabase } from 'meteor/xolvio:cleaner'
import md5 from 'md5'
const testFactory = function (_name, it_des) {
    return function ({ testModule, assertion }) {
        const { name, method } = testModule
        return (obj) => (
            describe(_name, function () {
                // after(function () {
                //     resetDatabase();
                // })
                it(it_des, function () {
                    const data = name[method](obj)
                    assertion(data)
                })
            })
        )
    }
}

function notify({ alertId }) {
    console.log(alertId)
};

const AlertServiceTest = new AlertService(notify)

console.log(AlertServiceTest);
(function (window, $, { AlertServiceModel, testData, assert }) {
    const AlertFactory = $(
        'Alert Service',
        'Should be able to create an alert',
    )
    const ALERT_CREATED = AlertFactory({ testModule: { name: AlertServiceModel, method: 'createAlert' }, assertion: assert.isString })

    return ALERT_CREATED(testData);
})(this, testFactory, { AlertServiceModel: AlertServiceTest, testData, assert })


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
    }
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
