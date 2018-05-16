import EventEmitter from 'event-emitter'
import imports from './dynamicImportsLintFix.js'
import throws from './modules/throws.js'
import makeEventAction from './extensions/makeEventAction.js'
import linkerMixin from './extensions/linkerMixin.js'
// import { transferStatic } from './public/changeMethodType.js'
// few utility functions to assist with type checking and extending schemas
// used as a composition function to extend Objects


export {
  imports,
  throws,
  linkerMixin,
  makeEventAction,
}
