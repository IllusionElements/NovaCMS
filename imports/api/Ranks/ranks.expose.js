import { RanksDisplayQuery } from '../../db/Ranks/queries.js'

RanksDisplayQuery.expose({
  firewall(userId, params){
    params = {};
  },
  publication: true,
  unblock: true,
});