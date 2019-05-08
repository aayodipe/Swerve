import React from 'react';
import { Button, Form, Card } from "react-bootstrap";
import './style.css';
import image from '../../component/images/bad-potehole.jpg'


function PotholePosting(props) {
    console.log(props);
    const { post } = props;
    return (
        <Card>
        <Card.Header><h1>Lenexa</h1></Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Body>
         <Card.Title className>Lenexa blood thirsty Road</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
        <footer className="blockquote-footer">
        Posted on December, 2019 by <cite title="Source Title">Adeyemi</cite>
        <Button variant="primary" className ="float-right">View Discussion</Button>
      </footer>
      </Card>
    )
}

export default PotholePosting;