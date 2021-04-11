import React from "react"
import LabelName from "./LabelName"
import HomeIcon from '@material-ui/icons/Home';
import PollIcon from '@material-ui/icons/Poll';
import ChatIcon from '@material-ui/icons/Chat';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import "./TagName.css"
const TagName=()=>{
    return(
        <div className="tagNameDiv">
          <LabelName text={"Attendance"} Icon={EmojiPeopleIcon}/>  
          <LabelName text={"Lectures"} Icon={LibraryBooksIcon} />
          
          <LabelName text={"Performance"} Icon={PollIcon}/>
          <LabelName text={"Assignments"} Icon={AssignmentIcon}/>
          <LabelName text={"Chat"} Icon={ChatIcon}/>
          <LabelName text={"Exams"} Icon={DesktopMacIcon}/>
        </div>
    )
}



export default TagName