import React, { Component } from 'react'

export default class ShowList extends Component {
  render() {
    return (
      <div>
        <h3>Friends</h3>
        <ul>
            {this.props.names.map((friend) => {
                return <li key={friend}> {friend} </li>
            })}
        </ul>
      </div>
    )
  }
}
//simple component, stateless, that via prop names in FriendsContainer will display a list of friends from the original array
