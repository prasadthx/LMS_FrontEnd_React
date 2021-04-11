import React from "react"
import LabelName from "./LabelName"
import {MdPeople, MdLibraryBooks, MdPoll, MdAssignment, MdChat, MdDesktopMac} from 'react-icons/md';
import "./TagName.css"
const TagName=()=>{
    return(
        <div className="tagNameDiv">
          <LabelName text={"Attendance"} Icon={MdPeople}/>
          <LabelName text={"Lectures"} Icon={MdLibraryBooks} />
          
          <LabelName text={"Performance"} Icon={MdPoll}/>
          <LabelName text={"Assignments"} Icon={MdAssignment}/>
          <LabelName text={"Chat"} Icon={MdChat}/>
          <LabelName text={"Exams"} Icon={MdDesktopMac}/>
        </div>
    )
}



export default TagName