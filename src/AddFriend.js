import React, { Component } from 'react';

export default class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFriend: ''
        }
        this.updateNewFriend = this.updateNewFriend.bind(this);
        this.handleAddNew = this.handleAddNew.bind(this);
    }
//obtain new Friend value from input field... set up onChange to track input
    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        });
    }
//this method will on click of button, pass the name of newFriend via props to addFriend component in FriendsContainer
    handleAddNew() {
        this.props.addNew(this.state.newFriend);
        this.setState({
            newFriend: ''
        });
    }

    render() {
        return (
            <div>
                <input 
                  type="text" 
                  value={this.state.newFriend}
                  onChange={this.updateNewFriend} 
                />
                <button type="submit" onClick={this.handleAddNew}>Submit</button>  
            </div>
        );
    }
}