import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/Register.css";
//create a function that called "userRegistration" which return the registration logics
//export "User" regisration to the Post.js



export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            location: "",
            description: "",
            image: ""
        };
    }

    //Function to allow data in the form fields
    validateForm() {
        return this.state.description.length;;
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
                    <FormGroup controlId="location" bsSize="large">
                        <FormLabel> Please enter the location </FormLabel>
                        <FormControl
                            autoFocus
                            type="location"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="description" bsSize="large">
                        <FormLabel> Please enter the description of the issue </FormLabel>
                        <FormControl
                            autoFocus
                            type="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="image" bsSize="large">
                        <FormLabel>Image (optional)</FormLabel>
                        <FormControl
                            value={this.state.image}
                            onChange={this.handleChange}
                            type="image"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsClass="custom-btn"
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Send Report
                    </Button>
                </form>
            </div>

        );
    }
}