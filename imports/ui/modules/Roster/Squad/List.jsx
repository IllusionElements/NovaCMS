import React from 'react'
import Table from '../../../Table'
const headers = []
const MemberList = props => (
  <table striped>
    <Table.Header
      headers = { headers }
      />
    <Table.Body>
      <Table.Row
        data = { props.members } />
    </Table.Body>
  </table>
)

export default MemberList
