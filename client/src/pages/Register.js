import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/Register.css";
//create a function that called "userRegistration" which return the registration logics
//export "User" regisration to the Post.js


export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        };
    }

    //Function to allow data in the form fields
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    //Prevent login from clearing out
    handleSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        return (
            <div className="Register">
                <div className="header">
                    <div className="headerWaves"></div>
                    <h1 className="headerFont">SWERVE</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <FormLabel> Username </FormLabel>
                        <FormControl
                            autoFocus
                            type="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel> Password </FormLabel>
                        <FormControl
                            autoFocus
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email address</FormLabel>
                        <FormControl
                            value={this.state.email}
                            onChange={this.handleChange}
                            type="email"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsClass="custom-btn"
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>

        );
    }
}