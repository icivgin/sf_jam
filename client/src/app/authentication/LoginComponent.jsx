import React, { Component } from 'react';

class LoginComponent extends Component {
  render() {
    return(
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-12">
          <h5>Login</h5>
          <hr/>
          <form>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Username" />
            </div>

            <div className="form-group">
              <input className="form-control" type="password" placeholder="Password" />
            </div>

            <div className="form-group">
              <button className="btn btn-block btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginComponent;