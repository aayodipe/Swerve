import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/Filter.css";

// const SearchForm  = ()=>{
export default class Filter extends Component {

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     if (this.state.location && this.state.description) {
    //         // API.uploadImage(this.state.image,this.state.location, this.state.description)
    //         .then(
    //             res => {
    //            this.props.history.push('/dashboard');
    //         })
    //         .catch(err => console.log(err));
    //     }
    //   };

      render() {
        return (
         <div className="Post">

            <div>
                    {/* <div className="headerWaves"></div> */}
                <div className="svg-container">
                    <svg viewBox="0 0 3500 500" className="top-container">
                    <path d="M0,100 C150,200 350,0 500,100 C650,200 700,0 850,50 C1000,100 1150,200 1300,100 C1450,0 1600,100 1750,150 C1900,200 2050,0 2200,100 C2350,200 2500,100 2650,100 C2800,100 2950,200 3100,100 C3250,0 3400,200 3550,150 L3500,0 L0,0 Z"></path>
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 3500 500" className="svg2">
                    <path d="M0,300 C125,400 250,50 375,250 C500,400 625,450 750,250 C875,100 1000,50 1125,150 C1250,300 1375,400 1500,250 C1625,100 1750,200 1875,275 C2000,350 2125,400 2250,300 C2375,200 2500,100 2625,200 C2750,300 2875,400 3000,300 C3125,200 3250,150 3375,200 C3425,250 3475,300 3500,350 L3500,00 L0,0 Z"></path>
                    </svg>
                </div>
                <h1 className="headerFont">SWERVE</h1>
            </div>
          
                <form>
                    <Form.Group controlId="location">
                        <Form.Label className="normal-font"> Search by Street Name </Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            name="Searchfields"
                            // value={props.location}
                            // onChange={() => props.handleInputChange}
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

                    <Button block className="custom-btn">
                    {/* <Button block className="custom-btn" onClick={()=> props.handleFormSubmit}> */}

                      Submit
                 
                    </Button>
                </form>
            </div>
        );
    }

}