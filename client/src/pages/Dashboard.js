import React, { Component } from "react";
import Navbar from "./Navbar"
import DashboardFooter from "../component/DashboardFooter"
import DashboardPost from "../component/DashboardPost"

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <h1>This is the Dashboard</h1>
                <DashboardPost />
                <DashboardFooter />
            </div>
        );
    }

}