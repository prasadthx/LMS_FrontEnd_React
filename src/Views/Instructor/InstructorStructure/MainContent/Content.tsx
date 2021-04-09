import './Content.css';
import {Route, useRouteMatch, useLocation, Redirect} from "react-router-dom";
import React from "react";
import {CreateAssignment} from "./Contents/Assignments/CreateAssignment";
import {EvaluateAssignment} from "./Contents/Assignments/EvaluateAssignment";
import {Classes as ChatClasses} from "./Contents/Chat/Classes";
import {CreateTest} from "./Contents/Exams/CreateTests";
import {EvaluateTest} from "./Contents/Exams/EvaluateTests";
import {Subjects} from "./Contents/Lectures/Subjects";
import {Attendance} from "./Contents/Performance/Attendance";
import {TestResults} from "./Contents/Performance/TestResults";
import {Classes} from "./Contents/Profile/Classes";
import {Feedback} from "./Contents/Profile/Feedback";
import {Profile} from "./Contents/Profile/Profile";

export default class Content extends React.Component<any,any> {
    render() {
        return (
            <div className='Content'>

                {/*Assignments*/}
                <Route path='/action/assignments/CreateAssignment'>
                    <CreateAssignment/>
                </Route>
                <Route path='/action/assignments/EvaluateAssignment'>
                    <EvaluateAssignment/>
                </Route>
                <Route path='/action/assignments'>
                    <Redirect to='/action/assignments/CreateAssignment'/>
                </Route>


                {/*Chat*/}
                <Route path='/action/chat/Classes'>
                    <ChatClasses/>
                </Route>
                <Route path='/action/chat'>
                    <Redirect to='/action/chat/Classes'/>
                </Route>


                {/*Exams*/}
                <Route path='/action/exams/CreateTest'>
                    <CreateTest/>
                </Route>
                <Route path='/action/exams/EvaluateTest'>
                    <EvaluateTest/>
                </Route>
                <Route path='/action/exams'>
                    <Redirect to='/action/exams/CreateTest'/>
                </Route>


                {/*Lectures*/}
                <Route path='/action/lectures/subjects'>
                    <Subjects/>
                </Route>
                <Route path='/action/lectures'>
                    <Redirect to='/action/lectures/subjects'/>
                </Route>


                {/*Performance*/}
                <Route path='/action/performance/attendance'>
                    <Attendance/>
                </Route>
                <Route path='/action/performance/TestResults'>
                    <TestResults/>
                </Route>
                <Route path='/action/performance'>
                    <Redirect to='/action/performance/attendance'/>
                </Route>


                {/*Profile*/}
                <Route path='/action/profile/classes'>
                    <Classes/>
                </Route>
                <Route path='/action/profile/feedback'>
                    <Feedback/>
                </Route>
                <Route path='/action/profile/profile'>
                    <Profile/>
                </Route>
                <Route path='/action/profile'>
                    <Redirect to='/action/profile/profile'/>
                </Route>
                <Route path='/action'>
                    <Redirect to='/action/profile/profile'/>
                </Route>
            </div>
        );
    };
}


