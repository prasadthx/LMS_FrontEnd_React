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
        const greeting = 'Welcome to React';
        return (

            <div className='dashboard'>
                <BrowserRouter>
                <Sidebar sidebarStatus = {this.state.state}/>
                    <MainContent toggleSidebar={this.toggleState} sidebarStatus = {this.state.state}>
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
                    </MainContent>
                </BrowserRouter>
            </div>

        );
    }
}