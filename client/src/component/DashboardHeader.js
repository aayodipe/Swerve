import React, { Component } from "react";
import { connect } from 'react-redux';
import "../styles/header.css"
import logo from "../styles/icon_logo.png";

class DashboardHeader extends Component {

    render() {
        console.log(this.props);

        return (
            <div className="swerve-header">
                <h1 className="header-text">SWERVE</h1>
                <div className="username-logo">
                    <img src={logo} alt="user icon" className="logo" />
                    {this.props.auth.user && <h1 className="username-text">Hello, {this.props.auth.user.name}!</h1>}
                </div>
                <div className="box">
                    <div className="header-waves"></div>
                </div>
                <div class="container">
                    <svg viewBox="-10 0 900 500" preserveAspectRatio="xMinYMin meet">
                        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" className="wave"></path>
                    </svg>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps)(DashboardHeader);