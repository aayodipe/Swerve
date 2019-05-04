import React, { Component } from "react";
import "../styles/header.css"
import logo from "../styles/icon_logo.png";

export default class DashboardHeader extends Component {

    render() {
        return (
            <div className="swerve-header">
                <h1 className="header-text">SWERVE</h1>
                <div className="username-logo">
                    <img src={logo} alt="user icon" className="logo" />
                    <h1 className="username-text">Logged In Username</h1>
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