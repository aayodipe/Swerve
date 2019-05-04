import React, { Component } from "react";
import Navbar from "./Navbar"
import DashboardFooter from "../component/DashboardFooter"
import DashboardPost from "../component/DashboardPost"

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <DashboardPost />
                <DashboardFooter />
            </div>
        );
    }

}