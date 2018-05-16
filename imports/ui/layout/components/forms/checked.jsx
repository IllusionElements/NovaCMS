import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ id, name, title } = {}) => (
  <div className="custom-control custom-checkbox">
    <CheckboxLabel
      id={id}
      title={title}
      name={name}
    />
  </div>
)

const CheckboxLabel = ({
 id, title, name, Check
}) => (
  <label className="custom-control-label" htmlFor={id}>
    { title }
    <input
      id={id}
      className="custom-control-input mt-2"
      name={name}
      type="checkbox"
    />
  </label>
)


Checkbox.defaultProps = {
  id: null,
  name: null,
  title: null,
}
Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
}
export default Checkbox
