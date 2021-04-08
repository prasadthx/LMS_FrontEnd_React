import React from "react";
import './SidebarContent.css';
import {BrowserRouter, Route} from "react-router-dom";
import {SidebarOption} from "./SidebarOption";

export class SidebarContent extends React.Component{
    render() {
        return (

            <div className='SidebarContent'>
                <Route exact path='/action' component={SidebarOption}/>
                <Route exact path='/action/chat'>
                    Chat
                </Route>
                <Route exact path='/action/lectures'>
                    Lectures
                </Route>
                <Route exact path='/action/performance'>
                    Performance
                </Route>
                <Route exact path='/action/assignments'>
                    Assignments
                </Route>
                <Route exact path='/action/exams'>
                    Exams
                </Route>
            </div>

        );
    }
}