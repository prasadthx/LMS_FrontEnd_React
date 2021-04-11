import React from "react"
import "./LabelName.css"
import {IconType} from "react-icons";

class LabelName extends React.Component<{ text: string, Icon: IconType }> {
    render() {
        let {text, Icon} = this.props;
        return (
            <div className="labelNameDiv">
                <Icon className="logoIcon"/>
                <h2 className='font-medium text-center text-2xl'>{text}</h2>
            </div>
        )
    }
}

export default LabelName

