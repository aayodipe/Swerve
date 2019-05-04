import React, { Component } from "react";
//import Navbar from "./Navbar"
import DashboardFooter from "../component/DashboardFooter"
import DashboardPost from "../component/DashboardPost"
import DashboardHeader from "../component/DashboardHeader"

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <DashboardHeader />
                <DashboardPost />
                <DashboardFooter />
            </div>
        );
    }

}