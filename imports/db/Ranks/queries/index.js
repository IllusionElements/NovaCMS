import Ranks from './collection.js'

const RanksDisplayQuery = Ranks.createQuery('getRanksList', {
  $filters({ filters, options, params }) {
    const { $options, ...$filters } = params
    options.sort = $options.sort // eslint-disable-line
    Object.assign(filters, $filters)
  },
  id: 1,
  name: 1,
  abbr: 1,
})

export default RanksDisplayQuery;
