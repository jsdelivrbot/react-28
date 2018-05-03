import React, { Component } from "react";

class SearchBar extends Component {
  // all javascript classes have a special function called constructor,  constructor is the only and first function gets called automatically whenever a new instance of the class is created
  // functional component do not have state, only class based
  // initialize state in a class based component
  // constructor is reserved for setups
  constructor(props) {
    // super calls parent method
    super(props);
    this.state = { term: "" };
  }
  // declare method in a class
  render() {
    // add event handler
    // return <input onChange={this.onInputChange} />;
    return (
      <div>
        <input
          placeholder='search'
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
  // arg 'event' object
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
