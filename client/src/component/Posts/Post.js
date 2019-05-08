import React, { Component } from 'react'
import { Button, Form, Row } from 'react-bootstrap';

export default class Post extends Component{
constructor(props){
     super(props)
}

render(){
     return(
          <Row className = "">
          <Col>
                <Row>Image</Row>
                <Row>City Name</Row>
          </Col>

          <Col>
               <Row>Text</Row>               
               <Row>
                    <Col xm={12}> Posted by Adeyemi on 12of Dec.,2019</Col>
                 
               </Row>
          </Col>
        </Row>
     )
}

}