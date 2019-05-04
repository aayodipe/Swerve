import React, { Component } from "react";
import "../styles/footer.css";

export default class DashboardFooter extends Component {

    render() {
        return (
            <div className="footer-container">
                <div className="footer-links">
                    <h1><a href="/filter" className="link-text">Filter</a></h1>
                    <h1><a href="/post" className="link-text">Post</a></h1>
                </div>
            </div>
        );
    }
}