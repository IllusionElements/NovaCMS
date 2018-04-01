import AlertService from '/imports/api/alert/services/AlertService.js'
import { assert } from 'chai'
import testData from './testData.js'
const testFactory = function(name, it_des) {
    return function(testModule, assertion) {
        return (obj) => (
            describe(name, function() {
                it(it_des, () => {
                    const data = testModule(obj)

                    assertion(data)
                })
            })
        )
    }
}


const AlertFactory = testFactory(
    'Alert Service',
    'Should be able to create an alert',
)(AlertService.createAlert, assert.isString)

new AlertFactory(testData);
