import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/Filter.css";

export default class Filter extends Component {

    render() {
        return (
            <div className="filter-container">
            <h1>This is the filter page</h1>
                <form>
                    <Form.Group controlId="location">
                        <Form.Label className="normal-font"> Street Name </Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            name="location"
                            // value={this.state.location}
                            // onChange={this.handleInputChange}
                            placeholder="Example: Ward Parkway"

                        />
                    </Form.Group>

                    <h2>Or</h2>

                    <Form.Check 
                        type="radio"
                        id={`newest-radio`}
                        label={`Newest posts`}
                    />

                    <Form.Check 
                        type="radio"
                        id={`most-likes-radio`}
                        label={`Most likes posts`}
                    />

                    <Button block className="custom-btn" onClick={this.handleFormSubmit}>
              
                      Submit
                 
                    </Button>
                </form>
            </div>
        );
    }

}