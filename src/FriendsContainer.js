import React, { Component } from 'react';
import ShowList from './ShowList';
import AddFriend from './AddFriend';

export default class FriendsContainer extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            name: 'Alan Grinberg',
            friends: ['Joe Schmo', 'Abe Lincoln', 'Andy Smith']
        };
        this.AddFriend = this.AddFriend.bind(this);
    }
//this method takes what AddFriend recieved and add to the friends array, which then rerenders the app with the concatted name on the list
//due to state change below
    AddFriend(friend) {
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }));
    }

    render() {
      return (
        <div>
            <h3>Name: {this.state.name}</h3>
            <AddFriend addNew={this.AddFriend}/>
            <ShowList names={this.state.friends}/>
        </div>
      );
    }
}
