import React from "react";
import ReactDOM from 'react-dom';
import './Sidebar.css';
import {SidebarHeader} from "./SidebarHeader";
import {SidebarContent} from "./SidebarContent";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {SidebarOption} from "./SidebarOption";
import {MainContent} from "../MainContent/MainContent";

export class Sidebar extends React.Component<any,{initialValue:string}>{
    constructor(props:{}) {
        super(props);
        this.state = {
            initialValue:'Sidebar'
        }
    }

    render() {
        const SidebarClass = (this.props.sidebarStatus == 'before') ? 'Sidebar' : 'ToggleSidebar';
        return (
            <div className={SidebarClass + ' flex'+' flex-col'}>
                <SidebarHeader/>
                <SidebarContent/>
            </div>
        );
    }
}

// withRouter(Sidebar);