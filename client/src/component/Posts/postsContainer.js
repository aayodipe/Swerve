import React, { Component } from 'react'
import { Button, Form, Row } from 'react-bootstrap';

import Post from './post'

export default class Posts extends Component{
constructor(props){
     super(props)
}

render(){
     return(
          <Container>
          <Post />
        </Container>
     )
}

}