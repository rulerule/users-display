import React from 'react'
import DisplayPair from './DisplayPair'

const user = (props) => {
  return (
    <div className="user-wrapper">
      <DisplayPair
        property= 'name'
        label = 'name:'
        value = {props.name}
      />
      <DisplayPair
        property= 'email'
        label = 'email:'
        value = {props.email}
      />
      <DisplayPair
        property= 'phone'
        label = 'phone:'
        value = {props.phone}
      />
    </div>
  )
}

export default user
