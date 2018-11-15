import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderComponent from './common/HeaderComponent.jsx';
import HomeComponent from './home/HomeComponent.jsx';
import UserComponent from './users/UserComponent.jsx';
import LoginComponent from './authentication/LoginComponent.jsx';
import SignupComponent from './authentication/SignupComponent.jsx';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="container top-container">
        <div className="client">
          <HeaderComponent />

          <Route exact path="/" component={HomeComponent}/>
          <Route path="/users" component={UserComponent}/>
          <Route path="/login" component={LoginComponent}/>
          <Route path="/signup" component={SignupComponent}/>
        </div>
      </div>
    );
  }
}

export default App;
