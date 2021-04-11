import React from "react"
import "./StudentStructureSidebar.css"
import LabelName from "./LabelName"
import HomeIcon from '@material-ui/icons/Home';
import PollIcon from '@material-ui/icons/Poll';
import ChatIcon from '@material-ui/icons/Chat';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import {Link} from "react-router-dom"

export class  StudentStructureSidebar extends React.Component{
    render(){
    return(
    <div className="studentStructureSidebarDiv" >
        <ul className="UnorderList">
          <Link to="/"> <li><LabelName text={"Attendance"} Icon={EmojiPeopleIcon}/></li>  </Link> 
          <Link to="/assignment"> <li><LabelName text={"Lectures"} Icon={LibraryBooksIcon} /></li>   </Link> 
            <li><LabelName text={"Performance"} Icon={PollIcon}/></li>
            <li><LabelName text={"Assignments"} Icon={AssignmentIcon}/></li>

            <li><LabelName text={"Chat"} Icon={ChatIcon}/></li>
            <li>  <LabelName text={"Exams"} Icon={DesktopMacIcon}/></li>
        </ul>
        
        
        
      



    </div>
)

    };
}