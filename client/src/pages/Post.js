import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
//Create the function to "UserPost" which  returns user post.
//NOTE: THIS IS WHERE THE USER WILL WRITE WHATEVER THE WOULD LIKE TO POST AND WHEN THE SUBMIT THEIR POST IT SEND TO THE DATABASE
//Export Post to the Container

export default class FormReport extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: "",
        description:""
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'text' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Location:
            <input
              name="location"
              type="text"
              checked={this.state.location}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

  module.exports = Post.js;