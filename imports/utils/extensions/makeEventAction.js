import createObjectFromKeys from '../modules/createObjectFromKeys.js'
const makeEventAction = (type, ...argNames) => (...args) =>(
  argNames.reduce((action, arg, index) => Object.assign(
    action,
    createObjectFromKeys(arg, args[index]),
  ), { type }))

export default makeEventAction
