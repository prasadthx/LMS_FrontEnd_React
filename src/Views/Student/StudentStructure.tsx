import React from "react";
import "./StudentStructure.css"
import {StudentStructureTop} from "./StudentStructureTop"
import {StudentStructureSidebar} from "./StudentStructureSidebar"
import {StudentStructureMain} from "./StudentStructureMain"
import TagName from "./TagName"
export class StudentStructure extends React.Component{
    render() {
        return (
            <div className="studentStructurediv">
                {/*Top Container*/}
                <StudentStructureSidebar/>
                <StudentStructureTop/>
                <TagName/>
                  {/*Sidebar Container*/}
               
                 {/*Main Container*/}
                <StudentStructureMain/>
            </div>
        );
    }
}