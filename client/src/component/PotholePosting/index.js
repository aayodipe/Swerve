import React from 'react';
import { Button, Form, Card } from "react-bootstrap";
import './style.css';
import image from '../../component/images/bad-potehole.jpg'



function PotholePosting(props) {
    console.log(props);
    const { post } = props;

    
    return (
        <Card>
        <Card.Header><h1>{post.location}</h1></Card.Header>
        <Card.Img variant="top" src={image}  onChange ={props.uploadFile}/>
        <Card.Body>
         <Card.Title className>{post.Title}</Card.Title>
          <Card.Text>
            {post.description}
          </Card.Text>
        </Card.Body>
        <footer className="blockquote-footer">
        Posted on {post.date} by <cite title="Source Title">{post.name}</cite>
        <Button variant="primary" className ="float-right">View Discussion{ ' '}  {post.comment}</Button>
      </footer>
      </Card>
    )
}

export default PotholePosting;