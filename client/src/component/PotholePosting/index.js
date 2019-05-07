import React from 'react';
import './style.css';

function PotholePosting(props) {
    console.log(props);
    const { post } = props;
    return (
        <div className="card">
            <h1>{post.name}</h1>
            <h2>{post.location}</h2>
            <small>{post.date}</small>
            <p>{post.description}</p>
            <p>0 Notes</p>
        </div>
    )
}

export default PotholePosting;