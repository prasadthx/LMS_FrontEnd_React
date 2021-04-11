import React from 'react'
import "./StudentStructureTop.css"
import {StudentStructureTopIcons} from "./StudentStructureTopIcons"

export class StudentStructureTop extends React.Component{
    render(){
        return(
            <div className="studentStructureTopDiv">
                <h1 className="logoName">Dnyaan</h1>

            <StudentStructureTopIcons/>
            </div>
        );
    }
};