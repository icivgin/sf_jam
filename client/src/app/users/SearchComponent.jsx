import React, { Component } from 'react';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return(
      <input className="form-control search-bar" placeholder="Search for a user by keyword (i.e. Richmond, guitar, indie-rock, intermediate ...)" value={this.props.filterText} onChange={this.handleFilterTextInputChange}/>
    )
  } 
}

export default SearchComponent;
