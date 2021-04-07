import React from "react";
import './MainContent.css';
import {MainHeader} from "./MainHeader";
import {Content} from "./Content";

export class MainContent extends React.Component{
    render() {
        return (
            <div className='MainContent flex flex-col'>
                <MainHeader/>
                <Content/>
            </div>
        );
    }
}