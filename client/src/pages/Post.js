import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Post.css";
import API from "../util/API";
import Axios from "axios";
// import image from "../component//images/bad-potehole.jpg"


export default class Post extends Component {


    constructor(props) {
        super(props);

        this.state = {
            posts:[],
            location: "",
            description: "",
            title:"",
            image: null

        };
    }

      //hanld Image File
      fileSelectedHandler = (event)=>{
           
          console.log(event.target.files[0])
          this.setState({
            image: event.target.files[0]
          }
        )
      }
      //Handle Change
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    
    //Prevent login from clearing out
    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.location && this.state.description) {
            API.uploadImage(this.state.image,this.state.location, this.state.description)
            .then(
                res => {
               this.props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
        }
      };


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
                <form onSubmit={this.handleFormSubmit} enctype="multipart/form-data">

                {/* <Form.Group controlId="title">
                        <Form.Label className="normal-font"> 
                        Headline </Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder ="Example: Blood Sucking! Pothole"
                            
                        />
                    </Form.Group> */}
                    <Form.Group controlId="location">
                        <Form.Label className="normal-font"> Street Name </Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleInputChange}
                            placeholder = "Example: Ward Parkway"
                            
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label className="normal-font"> Please enter the description of the issue </Form.Label>

                        <Form.Control
                            autoFocus
                            as="textarea"
                            rows="5"
                            type="textarea"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label className="normal-font">Image (Required)</Form.Label>
                        <Form.Control
                         
                            onChange={this.fileSelectedHandler}
                            type="file"
                            name= "image"
                        />
                    </Form.Group>

                    <Button block className="custom-btn" onClick={this.handleFormSubmit}>
              
                      Submit
                 
                    </Button>
                </form>
            </div>

        );
    }
}