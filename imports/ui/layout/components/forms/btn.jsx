import React from 'react'

const BTN = ({ button } = {}) => {
  const { type, title, ...classProps } = button
  console.log(...type)
  return (
    <button
      type={type}
      className={`btn btn-${classProps.size} btn-${classProps.color || 'default'} ${classProps.margin || 'mt-3'}`}
    >
      { title }
    </button>)
}

export default BTN
