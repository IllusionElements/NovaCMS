import Ranks from '/imports/db/Ranks'
function $id(id) {
  if (id in this.params) {
    this.filters[id] = this.params[id];
  }
}
const RecruitsQuery = Ranks.createQuery({
  $filter({ filters, params }) {
    ['squadId', 'recruitId', 'recruiterId',].forEach($id, { // eslint-disable-line
      filters,
      params,
    })
  },
  recruitId: 1,
  recruiterId: 1,
  squadId: 1,
})


export default RecruitsQuery
