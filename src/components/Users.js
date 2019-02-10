import React from 'react'
import User from './User'

const users = (props) => props.users.map((user, index) => {
  return <User
    name = { user.name }
    email = {user.email }
    phone = {user.phone }
    key = { user.id }
  />
})

export default users
