import React from 'react'

const displayPair = (props) => {
  return (
    <div className="display-pair">
      <label htmlFor={props.property}>{props.label}</label>
      <span>{props.value}</span>
    </div>
  )
}

export default displayPair
