import React from "react";
//import './SidebarOption.css'

export class SidebarOption extends React.Component<{content: string},any>{
    constructor(props:any){
        super(props);
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
        }
    }

    render() {
        const menus = {
            'profile' :
                [
                    'Classes',
                    'Profile',
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
                    'subjects'
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
                    'Evaluate Assignment'
                ]
            ,
            'chat':
                [
                    'classes'
                ]
        }

        return (
            <div>
                {this.optionRenderer(menus)}
            </div>
        );
    }
}
