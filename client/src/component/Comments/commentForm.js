import React, { useState, Component }from "react";
import { Button, Form } from "react-bootstrap";
import API from '../../util/API'



// const CommentForm = ({ postId, API }) => {
//      const [text, setText] = useState('');
//      const handleFormSubmit = (e)=>{
//           e.preventDefault();
//           API.addComment(postId, { text })
//              .then(res =>{
//                console.log(res);
               
//             })
//             setText('');
//             console.log('Api')
//      }
  export default class CommentForm extends Component{

     constructor(props) {
          super(props);
  
          this.state = {
              posts:[],
             text:'',
             postId : ''
  
          };
      }

//On page upload
 componentDidMount() {
     this.loadAllPost();
   }

   loadAllPost = () => {
     API.getAllPosts()
       .then(res =>{
         console.log(res)
         this.setState({ 
         posts: res.data
                     
       
       })}
       )
       .catch(err => console.log(err));
   };

  
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
     if (this.state.text) {
       API.addComment(this.state.posts._id,{
         text: this.state.text,
       
       })
         .then(
             res => {
            console.log(res)
         })
         .catch(err => console.log(err));
     }
     console.log(event)
   };

       render(){     
            
          
       return (   <div className="display-none">
                <Form className ="mb-4" >       
                  
                    <Form.Group controlId="text">
                        <Form.Label className="normal-font"> Leave a Comment</Form.Label>
                        <Form.Control
                            autoFocus
                            as="textarea"
                            rows="5"
                            type="textarea"
                            name="text"
                            placeholder='Create a post'
                            value={this.state.text}
                            onChange={this.handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Button className="btn btn-primary"
                    type="submit"
                    onClick={this.handleFormSubmit}> Submit</Button>            
                  
                </Form>
            </div>

        );
        }
    }

   
   