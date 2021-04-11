import React from "react"
import "./StudentStructureMain.css"
import MenuCards from "./MenuCards"
export class StudentStructureMain extends React.Component{
    render(){
        return(
            <div className="studentStructureMainDiv">
                <MenuCards heading="Attendance"/>
                <MenuCards heading="Performance"/>
                <MenuCards heading="Assignments"/>
                <MenuCards heading="Attendance"/>
                <MenuCards heading="Exams"/>
                {/*<MenuCards heading="Attendance"/>*/}
                {/*<MenuCards heading="Attendance"/>*/}
                {/*<MenuCards heading="Attendance"/>*/}
                {/*<MenuCards heading="Attendance"/>*/}
                {/*<MenuCards heading="Attendance"/>*/}
                {/*<MenuCards heading="Attendance"/>*/}
                {/*<MenuCards heading="Attendance"/>*/}
                {/*<MenuCards heading="Attendance"/>*/}
            </div>
        )
    }
}