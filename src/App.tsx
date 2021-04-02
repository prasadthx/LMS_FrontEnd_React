import './App.css';
import React from "react";
import {FirstPage} from "./Views/FirstPage";

export class App extends React.Component{
    render() {
        return (
            <div className="App">
                <FirstPage/>
            </div>
        );
    }
}

