import React from "react";
import './SidebarContent.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {SidebarOption} from "./SidebarOption";

export class SidebarContent extends React.Component<any,any>{
    render() {
        return (
            <div className='SidebarContent'>
                <Route path='/action/profile'>
                    <SidebarOption content='profile'/>
                </Route>
                <Route path='/action/chat'>
                    <SidebarOption content='chat'/>
                </Route>
                <Route path='/action/lectures'>
                    <SidebarOption content='lectures'/>
                </Route>
                <Route path='/action/performance'>
                    <SidebarOption content='performance'/>
                </Route>
                <Route path='/action/assignments'>
                    <SidebarOption content='assignments'/>
                </Route>
                <Route path='/action/exams'>
                    <SidebarOption content='exams'/>
                </Route>
            </div>

        );
    }
}