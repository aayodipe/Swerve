import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/Login.css";

//Create constructor with login info
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    //Function to allow data in the form fields
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
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

    //Render form info on page with relevant username and password data
    render() {
        return (
            <div className="Login">
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
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsClass="custom-btn"
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>

        );
    }
}