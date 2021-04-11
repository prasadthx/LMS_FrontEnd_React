import { render } from "@testing-library/react"
import React from "react"
import "./StudentStructureTopIcons.css"
import Icon from '@material-ui/core/Icon';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export class StudentStructureTopIcons extends React.Component{
    render(){
        return(
            <div className="studentStructureTopIconsDiv">
                <NotificationsActiveIcon className="notificationsActiveIcon"/>
                <AccountCircleIcon  className="accountCircleIcon" />
            </div>
        )
    }
}