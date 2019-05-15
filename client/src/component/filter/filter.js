import React, { Component } from 'react';
import API from "../../util/API";
import Post from "../../pages/Post";
import PotholePosting from '../PotholePosting';
import { Button, Form } from "react-bootstrap";
// import "../../styles/Filter";

export default class Filter extends Component {
constructor(){
    super()
        this.state = {
            posts: [],
            Searchfields : ''
        };
    
}
   


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
    //Search item
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        const filterPost = this.state.posts.filter(post =>{
            return post.location.toLowerCase().includes(this.state.Searchfields.toLowerCase()) })

            if(this.state.Searchfields !== null){
              return     this.setState({posts:filterPost})
            }else{
                this.setState({
                    'Searchfields':''})
              return  this.props.history.push('/filter');
            }
      };
    
     
   

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
                  <div className="filter-container">
          
                <form>
                    <Form.Group controlId="location">
                        <Form.Label className="normal-font"> Search by Street Name </Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            name="Searchfields"
                            value={this.state.location}
                            onChange={this.handleInputChange}
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
