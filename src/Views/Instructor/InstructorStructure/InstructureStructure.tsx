import React from "react";
import './InstructorStructure.css';
import {Sidebar} from "./Sidebar/Sidebar";
import {MainContent} from "./MainContent/MainContent";
import {BrowserRouter, Route} from "react-router-dom";
import {SidebarOption} from "./Sidebar/SidebarOption";


export class InstructorStructure extends React.Component<{},{state:string}>{
    constructor(props:{}) {
        super(props);
        this.state = {
            state:'before'
        }
    }
    toggleState = () => {
        if(this.state.state == 'before') {
            this.setState({state: 'after'})
        }
        else{
            this.setState({state: 'before'})
        }
        console.log(this.state.state);
    }

    render() {
        return (

            <div className='dashboard'>
                <Sidebar sidebarStatus = {this.state.state}/>
                <MainContent toggleSidebar={this.toggleState} sidebarStatus = {this.state.state}/>
            </div>

        );
    }
}