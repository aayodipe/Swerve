//import react and Component from react
//import Login from "./Login"
//import Register from "./Register"
//Create the function to "UserPost" which  returns user post.
//NOTE: THIS IS WHERE THE USER WILL WRITE WHATEVER THE WOULD LIKE TO POST AND WHEN THE SUBMIT THEIR POST IT SEND TO THE DATABASE
//Export Post to the Container

// import React, { Component } from "react";

// export default class Post extends Component {

//     render() {
//         return (
//             <div>
//                 <h1>This is where you make a post</h1>
//             </div>
//         );
//     }

// }

import React, { Component } from "react";
import Navbar from "./Navbar"

export default class Post extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <h1>This is where you make a post</h1>
            </div>
        );
    }

}