import React from "react";
import './SidebarOption.css'
import {Link} from 'react-router-dom'

export class SidebarOption extends React.Component<{content: string},any>{
    constructor(props:any){
        super(props);
        this.state = {
            focused:0
        }
    };

    optionRenderer = (menu: { performance: string[]; exams: string[]; assignments: string[]; chat: string[]; profile: string[]; lectures: string[] }) => {
        switch(this.props.content){
            case 'profile':
                return menu.profile;
            case 'assignments':
                return menu.assignments;
            case 'performance':
                return menu.performance;
            case 'lectures':
                return menu.lectures;
            case 'exams':
                return menu.exams;
            case 'chat':
                return menu.chat;
            default:
                return menu.profile;
        }
    }

    render() {
        const menus = {
            'profile' :
                [
                    'Profile',
                    'Classes',
                    'Feedback'
                ]
            ,
            'performance':
                [
                    'Attendance',
                    'Test Results',
                ]
            ,
            'lectures':
                [
                    'TimeTable',
                    'Subjects'
                ]
            ,
            'exams':
                [
                    'Create Test',
                    'Evaluate Test'
                ]
            ,
            'assignments':
                [
                    'Create Assignment',
                    'View Assignments',
                    'Evaluate Assignment'
                ]
            ,
            'chat':
                [
                    'Classes'
                ]
        }

        return (
            <div className='SidebarOption'>
                {this.optionRenderer(menus).map((option:string, index:number) => <Link to={'/action/' + this.props.content +'/'+ option.replaceAll(' ','')}
                      onClick={(e) => {
                          this.setState({
                              focused: index,
                          })
                      }}
                      className={index==this.state.focused?'bg-black':''}
                      key={index}
                      >
                    <div className='py-4 px-0.5  text-center focus-within:bg-blue-600'>
                        {option}
                    </div>
                </Link>)}
            </div>
    );
}
}
