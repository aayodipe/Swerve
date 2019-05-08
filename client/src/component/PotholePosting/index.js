import React from 'react';
import Moment from 'react-moment';
import { Button, Form, Card } from "react-bootstrap";
import './style.css';
import image from '../../component/images/bad-potehole.jpg';


function PotholePosting(props) {
    console.log(props);
    const { post } = props;

    // const handleLikes = ()=>{
      
    //    }

    // handleButtonClicked =(e)=>{
    
    //   //Prevent Default
    //   e.preventDefault
    //     //called handleLikes
    //   handleLikes()
    //}
    return (
        <Card>
        <Card.Header><h1>{post.location}</h1></Card.Header>
        <Card.Img variant="top" src={image}  onChange ={props.uploadFile}/>
        <Card.Body>
         <Card.Title className>{post.Title}</Card.Title>
          <Card.Text>
            <h3>{post.description}</h3>
          </Card.Text>
        </Card.Body>
        <footer className="blockquote-footer">
        Posted on <Moment format='YYYY/MM/DD'>{post.date}</Moment> { '  '}by <cite title="Source Title">{post.name}</cite>{ "    "}
        
        <Button variant="primary" className ="float-right">View Discussion <span className='comment-count'>3</span></Button>
        <button type="button" className="btn btn-light ml-4">
              <i class="fas fa-thumbs-up"></i>
              <span className ="ml-1">4</span>
            </button>
            <button type="button" className="btn btn-light ml-4">
              <i class="fas fa-thumbs-down"></i>
            </button>
            {'  '}
            <button      
            type="button"
            className="btn btn-danger ml-4"
          >
            <i class="fas fa-times"></i>
          </button>
      </footer>
      </Card>
    )
}

export default PotholePosting;