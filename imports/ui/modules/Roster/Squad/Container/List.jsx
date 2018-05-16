import { withQuery } from 'meteor/cultofcoders:grapher-react'
import { Table } from 'semantic-ui-react'
import React from 'react'
import SquadListQuery from '..'
import SquadListContainer from './SquadListContainer.jsx'
import PropType from 'prop-types'

const SquadMembersTable = ({ members }) => (
  <Table>
    <Table.Header>
      <Table.HeaderCell>Gamertag/Rank</Table.HeaderCell>
      <Table.HeaderCell>Actions</Table.HeaderCell>
      <Table.HeaderCell>Date Added</Table.HeaderCell>
      <Table.HeaderCell>Recruited By</Table.HeaderCell>
      <Table.HeaderCell>Notes</Table.HeaderCell>
    </Table.Header>
    <Table.Body>
      <SquadListContainer members={members} />
    </Table.Body>
  </Table>
)

SquadMembersTable.propTypes = {
  members: PropType.arrayOf(PropType.string),
}

SquadMembersTable.defaultProps = {
  members: [],
}
export default withQuery(({ _id = null, name = null }) => (
  _id
    ? SquadListQuery.clone({ _id })
    : SquadListQuery.clone({ name })), {
  members: this.query.fetch(),
})(SquadMembersTable)
