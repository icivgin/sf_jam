import React, { Component } from 'react';

class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        neighborhoods: [],
        experience: []
      }
    };
  }

  componentDidMount() {
    fetch("/api/h/values")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            values: result
          });
        },
        (error) => {
          console.log("error");
        }
      )
  }

  render() {
    var neighborhoodOptions = [];
    this.state.values.neighborhoods.forEach(neighborhood => {
      neighborhoodOptions.push(<option key={neighborhood} value={neighborhood}>{neighborhood}</option>);
    });

    var experienceOptions = [];
    this.state.values.experience.forEach(experience => {
      experienceOptions.push(<option key={experience} value={experience}>{experience}</option>);
    });

    return(
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-12">
          <h5>Become an SF Jammer</h5>
          <hr/>
          <form>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Username" />
            </div>

            <div className="form-group">
              <input className="form-control" type="password" placeholder="Password" />
            </div>

            <div className="form-group">
              <input className="form-control" type="password" placeholder="Comfirm Password" />
            </div>

            <div className="form-group">
              <textarea className="form-control" type="text" placeholder="Short Bio"></textarea>
            </div>

            <div className="form-group">
              <label>Neighborhood</label><br/>
              <select>
                {neighborhoodOptions}
              </select>
            </div>

            <div className="form-group">
              <label>Experience</label><br/>
              <select>
                {experienceOptions}
              </select>
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

export default SignupComponent;