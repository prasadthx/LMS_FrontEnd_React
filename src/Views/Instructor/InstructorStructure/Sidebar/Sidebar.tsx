import React from "react";
import './Sidebar.css';
import {SidebarHeader} from "./SidebarHeader";
import {SidebarContent} from "./SidebarContent";

export class Sidebar extends React.Component{
    render() {
        return (
            <div className='Sidebar flex flex-col'>
                <SidebarHeader/>
                <SidebarContent/>
            </div>
        );
    }
}