import React, { Component } from 'react';
import "./DashboardPost.css"
import API from "../../util/API";
import Post from "../../pages/Post";
import PotholePosting from '../PotholePosting';
import { Button, Form } from "react-bootstrap";



export default class DashboardPost extends Component {

    state = {
        posts: [],
    };


    componentDidMount() {
        this.UploadAll()
    }

    UploadAll=()=>{
        API.getAllPosts().then(
            (res) => {
                console.log(res.data);
                this.setState({ posts: res.data });           
            }
        )
    }

    //Delete Post
      deletePost= id => {
          console.log(this.state.posts)
        API.deletePost(id)
          .then(res => this.UploadAll())
          .catch(err => console.log(err));
      };
       //Delete Post
       addLikes= id => {
      API.addLikes(id)
        .then(res => this.UploadAll())
        .catch(err => console.log(err));
    };


    unLike= id => {
   
      API.unLike(id)
        .then(res => this.UploadAll())
        .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="PostContainer">
                <div className="post-top">
                    {this.state.posts.map(post => {
                    return <div style={{ marginBottom: 20 }}>
                    <PotholePosting 
                    post={post} 
                    deletePost = {this.deletePost}
                    addLikes = {this.addLikes} 
                    unLike = {this.unLike}                    
                    />
                    </div>
                   

                    })}

                </div>
            </div>
        );
    }
}