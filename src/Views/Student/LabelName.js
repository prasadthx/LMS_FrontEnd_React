import React from "react"
import "./LabelName.css"
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';
import PollIcon from '@material-ui/icons/Poll';
import ChatIcon from '@material-ui/icons/Chat';

const LabelName=({text,Icon})=>{
    return(
        <div className="labelNameDiv">
            <Icon className="logoIcon"/>
           <h2>{text}</h2> 
            </div>
    )
}

export default LabelName

