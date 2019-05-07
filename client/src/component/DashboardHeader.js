import React, { Component } from "react";
import "../styles/header.css"
import logo from "../styles/icon_logo.png";

export default class DashboardHeader extends Component {

    render() {
        return (
            <div className="swerve-header">
                <h1 className="header-text">SWERVE</h1>
                {/* <div className="username-logo">
                    <img src={logo} alt="user icon" className="logo" />
                    <h1 className="username-text">Logged In Username</h1>
                </div> */}
                {/* <div className="box">
                    <div className="header-waves"></div>
                </div> */}
                <div className="svg-container">
                    <svg viewBox="0 0 4500 200">
                        <path d="M0,100 C150,200 350,0 500,100 C650,0 700,100 850,200 C1000,100 1150,0 1300,100 C1450,200 1600,100 1750,0 C1900,100 2050,200 2200,100 C2350,0 2500,100 2650,200 L2600,00 L0,0 Z" className="wave"></path>
                    </svg>
                </div>
            </div>
        );
    }
}