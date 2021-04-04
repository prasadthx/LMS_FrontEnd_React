import './App.css';
import React from "react";
import {FirstPage} from "./Views/FirstPage/FirstPage";
import {Footer} from "./Views/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {LoginPage} from "./Views/LoginPage/LoginPage";

export class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
            <div className="App">
                {/*<FirstPage/>*/}

                {/*<BrowserRouter>*/}
                    <Route path='/' exact component={FirstPage}/>
                    <Route path='/login' exact component={LoginPage}/>
                {/*</BrowserRouter>*/}
                <Footer />
            </div>
            </BrowserRouter>
        );
    }
}

