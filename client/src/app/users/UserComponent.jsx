import React, { Component } from 'react';
import './User.scss';
import SearchComponent from './SearchComponent.jsx';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filterText: ""
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
  }

  handleFilterTextInput(filterText) {
    this.setState({users: this.state.users, filterText: filterText});
  }

  componentDidMount() {
    fetch("/api/users")
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
          console.log("error");
        }
      )
  }

  render() {
    var userItems = [];
    this.state.users.forEach(user => {
      if (!Object.values(user).toString().toLowerCase().match(this.state.filterText.toLowerCase())) {
        return;
      }
      else {
        userItems.push(
          <div className="user-container">
            <div key={user.name} class="d-flex align-items-start">
              <div className="left">
                <img className="user-avatar" src={user.avatar_url} alt="" />
                <a className="mb">Message</a>
                <a>View Profile</a>
              </div>
              <div className="right">
                <p className="neighborhood">{user.neighborhood.toUpperCase()}</p>
                <h5 className="name">{user.name}</h5>
                <p className="bio">{user.bio}</p>
                <p className="small"><b>Skill Level: </b>{user.experience}<br/><b>Genres: </b>{user.genres.join(", ")}<br/><b>Instruments: </b>{user.instruments.join(", ")}</p>
              </div>
            </div>
          </div>
        )
      }
    })

    return(
      <div>
        <SearchComponent filterText={this.state.filterText} onFilterTextInput={this.handleFilterTextInput} />
        <p className="input-small">showing {userItems.length} jammers</p>
        {userItems}
      </div>
    )
  } 
}

export default UserComponent;
