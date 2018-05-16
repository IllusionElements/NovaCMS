import React from 'react'
import PropTypes from 'prop-types'

const SingleInput = props => (
  <div className="form-group">
    <label className="form-label" htmlFor={props.id}>
      {props.id}
    </label>
    <input
      id={props.id}
      className="form-control mt-2"
      name={props.name}
      type={props.type}
      value={props.val}
      onChange={props.controlFunc}
    />
  </div>
)

SingleInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  val: PropTypes.string,
  controlFunc: PropTypes.func,
}

SingleInput.defaultProps = {
  name: null,
  type: null,
  val: null,
  controlFunc: () => '',
}
export default SingleInput
