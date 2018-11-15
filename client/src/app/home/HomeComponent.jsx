import React, { Component } from 'react';
import './Home.scss';

class HomeComponent extends Component {
  render() {
    return(
      <div>
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="cta">Find a casual jam partner, join a band, or join a jam group. Playing with other people makes you better!</h2>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default HomeComponent;
