import React, { Component } from 'react'
import axios from 'axios'

import Users from '../components/Users'
import SearchField from '../components/SearchField'

import { containsSubstring } from '../scripts/stringHelpers'

class App extends Component {
  state = {
    users: [],
    searchFieldPlaceholder: 'Search User',
    activeSearch: ''
  }

  /** @NOTE
  * the search is case sensitive
  */
  updateActiveSearch = (event) => {
    this.setState({ activeSearch : event.target.value })
  }

  /** @Return #Array
  * returns the users that are visible after search
  */
  visibleUsers = () => {
    if(this.state.activeSearch.length === 0) return this.state.users
    return this.state.users.filter(user =>
      containsSubstring(user.name, this.state.activeSearch) ||
      containsSubstring(user.email, this.state.activeSearch)
    )
  }

  componentDidMount () {
    /** @NOTE
    * if this was a real call to a service we would place a
    * Spinner here, but since it is fake data, i ll assume we
    * dont need that
    */
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then( res => {
        const users = res.data
        this.setState({...this.state, users:users})
      })
  }

  render() {
    return (
      <section className="content-wrapper">
        <h1>Users Display</h1>
        <SearchField
          placeholder = { this.state.searchFieldPlaceholder }
          changeHandler = { this.updateActiveSearch }
        />
        <div className="users-container">
          <Users
            users = { this.visibleUsers() }
          />
        </div>
      </section>
    )
  }
}

export default App;
