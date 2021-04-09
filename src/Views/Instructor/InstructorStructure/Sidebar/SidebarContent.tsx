import React from "react";
import './SidebarContent.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {SidebarOption} from "./SidebarOption";

export class SidebarContent extends React.Component{
    render() {
        return (

            <div className='SidebarContent'>
                <Route path='/action/profile'>
                    Action
                </Route>
                <Route path='/action/chat'>
                    Chat
                </Route>
                <Route path='/action/lectures' component={SidebarOption}/>
                <Route path='/action/performance'>
                    <Link to='/action/performance/class'><div> Chat </div></Link>
                    <Link to='/action/performance/class'><div> Chat </div></Link>
                </Route>
                <Route exact path='/action/assignments'>Assignments</Route>
                <Route exact path='/action/exams'/>
            </div>

        );
    }
}