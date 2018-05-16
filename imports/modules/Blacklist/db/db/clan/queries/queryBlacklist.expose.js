import queryExposureParams from '/imports/api/server/queryExposureParams.js'
import isLoggedIn from '/imports/api/server/isLoggedIn.js'
import queryBlacklist from './queryBlacklist.js'

const queryExposure = queryExposureParams(([isLoggedIn], true, true, true))

queryBlacklist.expose(queryExposure)
