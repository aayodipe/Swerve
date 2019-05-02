import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/Post.css";
//create a function that called "userRegistration" which return the registration logics
//export "User" regisration to the Post.js




export default class Post extends Component {


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


    handleClick = () => {
        console.log('this is:', this);
        alert("Location: " + this.state.location + " Description: " + this.state.description + " Image: " + this.state.image);
      }
      



    render() {
        return (
            <div className="Register">
                <div className="header">
                    <div className="headerWaves"></div>
                    <h1 className="headerFont">SWERVE</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="location" bsSize="large">
                        <Form.Label className="normal-font"> Please enter the location </Form.Label>
                        <Form.Control
                            autoFocus
                            type="location"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="description">

             

                        <Form.Label className="normal-font"> Please enter the description of the issue </Form.Label>

                        <Form.Control
                            autoFocus
                            as="textarea"
                            rows="5"
                            type="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="image" bsSize="large">
                        <Form.Label className="normal-font">Image (optional)</Form.Label>
                        <Form.Control
                            value={this.state.image}
                            onChange={this.handleChange}
                            type="image"
                        />
                    </Form.Group>

                    <Button block className="custom-btn" onClick={this.handleClick}>
                        Post

                    </Button>
                </form>
            </div>

        );
    }
}