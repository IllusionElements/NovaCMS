import React from 'react'
import PropTypes from 'prop-types'

const Row = props => (
  <tr>
    {Object.values(props.data).map((el, i)=>(
      <td key={i}>{ el }</td>
    ))}
  </tr>
)

export default Row

Row.propType = {
  data: PropTypes.object,
}
