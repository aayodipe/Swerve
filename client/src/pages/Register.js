import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
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
                    <Form.Group controlId="username" bsSize="large">
                        <Form.Label className="normal-font"> Username </Form.Label>
                        <Form.Control
                            autoFocus
                            type="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" bsSize="large">
                        <Form.Label className="normal-font"> Password </Form.Label>
                        <Form.Control
                            autoFocus
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="email" bsSize="large">
                        <Form.Label className="normal-font">Email Address</Form.Label>
                        <Form.Control
                            value={this.state.email}
                            onChange={this.handleChange}
                            type="email"
                        />
                    </Form.Group>
                    <Button block className="custom-btn">
                        Sign Up
                    </Button>
                </form>
            </div>

        );
    }
}