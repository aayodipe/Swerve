import React from 'react';
import Moment from 'react-moment';
import { Button, Form, Card } from "react-bootstrap";
import './style.css';
import logo from "../../styles/icon_logo.png";
// import image from '../../component/images/bad-potehole.jpg';

function PotholePosting(props) {
    console.log(props);
    const { post } = props;

 
    return (
        <Card>
        <Card.Title className="post-header"><img src={logo} alt="user icon" className="post-logo" /> <h1 className="location-name">@{post.location}</h1></Card.Title>
        <Card.Img className="post-image" variant="top" src={post.image}  onChange ={props.uploadFile}/>
        <Card.Body>
         {/* <Card.Title><h3 className= "text-info">{post.title}</h3></Card.Title> */}
          <Card.Text>
            <h3 className="post-info">{post.description}</h3>
          </Card.Text>
        </Card.Body>
        <footer className="blockquote-footer footer-date">
        Posted on <Moment format='YYYY/MM/DD'>{post.date}</Moment> { '  '}by <cite title="Source Title">{post.name}</cite>{ "    "}
        
        <Button className ="float-right notes-button">View Discussion <span className='comment-count'>{post.comments.length}</span></Button>
        <button type="button" className="btn btn-light ml-4 middle-buttons"
    onClick = {()=>props.addLikes(post._id)}>
              <i class="fas fa-thumbs-up"></i>
              <span className ="ml-1">{post.likes.length}</span>
            </button>

            <button type="button" className="btn btn-light ml-4 middle-buttons"
            onClick = {()=>props.unLike(post._id)}>
              <i class="fas fa-thumbs-down"></i>
            </button>
            {'  '}



            <button      
            type="button"
            className="btn btn-danger ml-4 middle-buttons"
            onClick = {() => props.deletePost(post._id)}
          >
            <i class="fas fa-times"></i>
          </button>
      </footer>
      </Card>
    )
}

export default PotholePosting;