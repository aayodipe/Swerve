import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/Register.css";
import API from "../util/API";
//create a function that called "userRegistration" which return the registration logics
//export "User" regisration to the Post.js



    export default class Register extends Component{
        constructor(props) {
             super(props);
     
             this.state = {
                 name: "",
                 email: "",
                 password: ""
             };
         }
     
         //Function to allow data in the form fields
         validateForm() {
             return this.state.name.length > 0 && this.state.password.length > 0;
         }
   //Clear from input
         clearFormInput(){
            this.setState({ 
                name: "",
                email: "",
                password: "" })}
         
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
           if (this.state.email) {
             API.saveUser({
               username: this.state.name,
               email: this.state.email,
               password: this.state.password
             })
               .then(
                   res => {res.json('Registration successful!')
                   this.clearFormInput()
                console.log(res.data)}
               )
               .catch(err => console.log(err));
           }
         };

    render() {
        return (
            <div className="Register">
                <div className="header">
                    <div className="headerWaves"></div>
                    <h1 className="headerFont">SWERVE</h1>
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
                        />
                    </Form.Group>
                    <Form.Group controlId="email" bsSize="large">
                        <Form.Label className="normal-font">Email Address</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            
                        />
                    </Form.Group>
                    <Button className="custom-btn" 
                    type = "submit"
                    onClick={this.handleFormSubmit}>
                        Sign up
                    </Button>
                </form>
            </div>

        );
    }}
