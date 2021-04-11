import React from "react"
import "./StudentStructureSidebar.css"
import LabelName from "./LabelName"

import {MdPeople, MdLibraryBooks, MdPoll, MdAssignment, MdChat, MdDesktopMac} from 'react-icons/md';
import {Link} from "react-router-dom"

export class  StudentStructureSidebar extends React.Component{
    render(){
    return(
    <div className="studentStructureSidebarDiv" >
        <ul className="UnorderList">
          <Link to="/"> <li><LabelName text="Attendance" Icon={MdPeople}/></li>  </Link>
          <Link to="/assignment"> <li><LabelName text={"Lectures"} Icon={MdLibraryBooks} /></li>   </Link>
            <li><LabelName text={"Performance"} Icon={MdPoll}/></li>
            <li><LabelName text={"Assignments"} Icon={MdAssignment}/></li>

            <li><LabelName text={"Chat"} Icon={MdChat}/></li>
            <li>  <LabelName text={"Exams"} Icon={MdDesktopMac}/></li>
        </ul>
        
        
        
      



    </div>
)

    };
}