import './App.css';
import React from "react";
import {FirstPage} from "./Views/FirstPage/FirstPage";
import {Footer} from "./Views/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {LoginPage} from "./Views/LoginPage/LoginPage";
import {InstructorAction} from "./Views/Instructor/InstructorAction";

export class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
            <div className="App">
                {/*<FirstPage/>*/}

                {/*<BrowserRouter>*/}
                    <Route path='/' exact component={FirstPage}/>
                    <Route path='/login' exact component={LoginPage}/>
                    <Route path='/instructor' exact component={InstructorAction} />
                {/*</BrowserRouter>*/}
                <Footer />
            </div>
            </BrowserRouter>
        );
    }
}

