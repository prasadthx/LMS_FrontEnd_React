import './App.css';
import React from "react";
import {FirstPage} from "./Views/FirstPage/FirstPage";
import {Footer} from "./Views/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {LoginPage} from "./Views/LoginPage/LoginPage";
import {InstructorAction} from "./Views/Instructor/InstructorAction";
import {InstructorStructure} from './Views/Instructor/InstructorStructure/InstructureStructure'
import {StudentStructure} from "./Views/Student/StudentStructure";
import {Admin} from "./Views/Admin/Admin";
import {AdminRender} from "./Views/Admin/AdminRender";

export class App extends React.Component{
    render() {
        return (
            // <BrowserRouter>
            <div className="App">
                {/*<FirstPage/>*/}

                {/*<BrowserRouter>*/}

                    {/*<Route path='/admin' component={AdminRender}/>*/}
                    <Route path='/' exact component={FirstPage}/>
                    <Route path='/login' exact component={LoginPage}/>
                    <Route path='/instructor' exact component={InstructorAction} />
                    <Route path='/action' component={InstructorStructure} />
                    <Route path='/admin' exact component={Admin}/>
                    <Route path='/admin/:method' component={AdminRender}/>
                    {/*<Route path='/admin' component={Admin}/>*/}
                    {/*<Route path='/action/performance' exact component={InstructorStructure}/>*/}
                    <Route path='/student' exact component={StudentStructure}/>
                    
                {/*</BrowserRouter>*/}
                <Footer />
            </div>

        );
    };
}

