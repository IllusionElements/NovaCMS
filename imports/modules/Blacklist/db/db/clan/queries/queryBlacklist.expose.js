import gamertagBlacklistQuery from './gamertagBlacklistQuery.js'
import queryExposureParams from '../../../../api/server/queryExposureParams.js'
import isLoggedIn from '../../../../api/server/isLoggedIn.js'

const queryExposure = queryExposureParams(([isLoggedIn], true, true, true))

gamertagBlacklistQuery.expose(queryExposure)
