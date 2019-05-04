import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/Register.css";
import API from "../util/API";
//create a function that called "userRegistration" which return the registration logics
//export "User" regisration to the Post.js



export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            password2:""
        };
    }

    //Function to allow data in the form fields
    // validateForm() {
    //     return this.state.name.length > 0 && this.state.password.length > 0;
    // }
//Clear from input
    clearFormInput(){
       this.setState({ 
           name: "",
           email: "",
           password: "",
           password2:"" })}
    
    //Handle Form Change
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };


//Handle Form Submit
    handleFormSubmit = event => {
      event.preventDefault();
      if (!this.state.email){
          alert('Please enter an email!')
      }else 
      if(this.state.password  !== this.state.password2){
          alert('Password do not match!')
      }else{
          //Save to User's database
        API.saveUser({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
         
        })
           .then(
                res => {
                   
                this.clearFormInput()
                console.log(res)

            })
            .catch(err => console.log(err.message));
      }
    };
    render() {
        return (
            <div className="Register">
                <div className="header">
                    <div className="headerWaves"></div>
                    <h1 className="headerFont">User Registration</h1>
                </div>
                <div>
                    
                </div>
                <form>
                    <Form.Group controlId="name" bsSize="large">
                        <Form.Label className="normal-font"> Name </Form.Label>
                        <Form.Control
                            autoFocus
                            type = "text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            placeholder = "Name"
                        />
                    </Form.Group>
                    <Form.Group controlId="email" bsSize="large">
                        <Form.Label className="normal-font">Email Address</Form.Label>
                        <Form.Control
                            name = "email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            type="email"
                            placeholder ="example@yourname.com"
                        />
                    </Form.Group>
                    <Form.Group controlId="password" bsSize="large">
                        <Form.Label className="normal-font"> Password </Form.Label>
                        <Form.Control
                            autoFocus
                            name= "password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder ="Password must be min of letter"
                        />
                    
                    </Form.Group>
                    <Form.Group controlId="password2" bsSize="large">
                        <Form.Label className="normal-font"> Password2 </Form.Label>
                        <Form.Control
                            autoFocus
                            type="password"
                            name= "password2"
                            value={this.state.password2}
                            onChange={this.handleInputChange}
                            placeholder = "Must match with password"
                        />
                    
                    </Form.Group>
                   
                    <Button block className="custom-btn" type="submit" onClick = {this.handleFormSubmit}>
                        Sign Up
                    </Button>
                </form>
            </div>

        );
    }}
