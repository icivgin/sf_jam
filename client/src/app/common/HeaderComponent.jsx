import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class HeaderComponent extends Component {
  render() {
    return (
      <nav>
        <p><Link to="/">sfJam</Link></p>
        <p className="right"><Link to="/users">Users</Link></p>
      </nav> 
    )
  }
}

export default HeaderComponent;
