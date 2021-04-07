import React from "react";
import './InstructorStructure.css';
import {Sidebar} from "./Sidebar/Sidebar";
import {MainContent} from "./MainContent/MainContent";


export class InstructorStructure extends React.Component{
    render() {
        return (
            <div className='dashboard'>
                <Sidebar />
                <MainContent />
            </div>
        );
    }
}