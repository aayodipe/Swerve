import React from 'react';
import "../styles/DashboardPost.css"

// const styles = {
//   color: {
//       Red
//   }
// };

const DashboardPost = ({ classes }) => (
  <div className="PostContainer">
    <div className="post-top">
      <h1>Username</h1>
      <h1>@Road Name</h1>
    </div>
      <p className="post-content">This is the post cotent</p>
    <div className="post-bottom">
      <h2>Notes</h2>
      <h2>Likes</h2>
    </div>
  </div>
);

export default (DashboardPost);