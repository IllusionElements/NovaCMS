import React from 'react'
import PropTypes from 'prop-types'

export const Header = props => (
  <thead>
    <tr>
      {props.headers.map((header)=>(
        <th>{ header }</th>
      ))}
    </tr>
  </thead>
)

Header.propTypes = {
  headers: PropTypes.array,
}
