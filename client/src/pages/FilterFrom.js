import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/Filter.css";

const SearchForm  = ()=>{
         <div className="filter-container">
          
                <form>
                    <Form.Group controlId="location">
                        <Form.Label className="normal-font"> Search by Street Name </Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            name="Searchfields"
                            value={props.location}
                            onChange={() => props.handleInputChange}
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

                    <Button block className="custom-btn" onClick={()=> props.handleFormSubmit}>
              
                      Submit
                 
                    </Button>
                </form>
            </div>
        
    
}
export default SearchForm