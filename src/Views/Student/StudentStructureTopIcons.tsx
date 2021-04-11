import React from "react"
import "./StudentStructureTopIcons.css"
import {MdNotificationsActive, MdAccountCircle} from 'react-icons/md'

export class StudentStructureTopIcons extends React.Component{
    render(){
        return(
            <div className="studentStructureTopIconsDiv">
                <MdNotificationsActive className="notificationsActiveIcon"/>
                <MdAccountCircle  className="accountCircleIcon" />
            </div>
        )
    }
}