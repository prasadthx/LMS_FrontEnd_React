import React from "react";
import ReactDOM from 'react-dom';
import './Sidebar.css';
import {SidebarHeader} from "./SidebarHeader";
import {SidebarContent} from "./SidebarContent";

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
        return (
            <div onClick={this.hideOrShow.bind(this)} className={this.state.initialValue + ' flex'+' flex-col'}>
                <SidebarHeader/>
                <SidebarContent/>
            </div>
        );
    }
}