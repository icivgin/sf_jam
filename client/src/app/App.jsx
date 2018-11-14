import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderComponent from './common/HeaderComponent.jsx';
import HomeComponent from './home/HomeComponent.jsx';
import UserComponent from './users/UserComponent.jsx';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="client">
        <HeaderComponent />

        <Route exact path="/" component={HomeComponent}/>
        <Route path="/users" component={UserComponent}/>
      </div>
    );
  }
}

export default App;
