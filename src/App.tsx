import './App.css';
import React from "react";
import {FirstPage} from "./Views/FirstPage/FirstPage";
import {Footer} from "./Views/Footer/Footer";

export class App extends React.Component{
    render() {
        return (
            <div className="App">
                <FirstPage/>
                <Footer />
            </div>
        );
    }
}

