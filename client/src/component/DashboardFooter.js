import React, { Component } from "react";
import "../styles/footer.css";

export default class DashboardFooter extends Component {

    render() {
        return (
            <div className="footer-container">
                <div className="post-top">
                    <h1>Filter</h1>
                    <h1>Post</h1>
                </div>
            </div>
        );
    }
}