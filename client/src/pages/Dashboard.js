import React, { Component } from "react";
import Navbar from "./Navbar"

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <h1>This is the Dashboard</h1>
            </div>
        );
    }

}