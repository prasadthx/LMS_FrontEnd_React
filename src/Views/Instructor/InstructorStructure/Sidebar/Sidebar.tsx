import React from "react";
import ReactDOM from 'react-dom';
import './Sidebar.css';
import {SidebarHeader} from "./SidebarHeader";
import {SidebarContent} from "./SidebarContent";
import {BrowserRouter} from "react-router-dom";

export class Sidebar extends React.Component<any,{initialValue:string}>{
    constructor(props:{}) {
        super(props);
        this.state = {
            initialValue:'Sidebar'
        }
    }

    hideOrShow(){

    }

    changeStyles = () => {
        // = this.state.isClicked?'black' : 'white'
    }

    render() {
        const SidebarClass = (this.props.sidebarStatus == 'before') ? 'Sidebar' : 'ToggleSidebar';
        return (
            <div onClick={this.hideOrShow.bind(this)} className={SidebarClass + ' flex'+' flex-col'}>
                <SidebarHeader/>
                <SidebarContent/>
            </div>
        );
    }
}