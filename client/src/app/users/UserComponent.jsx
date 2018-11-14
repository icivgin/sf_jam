import React, { Component } from 'react';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
          });
        }
      )
  }

  render() {
    return(
      <div>
        <p>Users</p>
        
        {this.state.users.map(user => (
          <div key={user.name}>
            {user.name} {user.bio}
          </div>
        ))}
      </div>
    )
  } 
}

export default UserComponent;
