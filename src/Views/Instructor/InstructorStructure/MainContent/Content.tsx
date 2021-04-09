import './Content.css';
import {Route, useRouteMatch, useLocation} from "react-router-dom";
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

function findPath(path: string){
    const slashpostion = (path:string):number => {
        for (let i = path.length - 1; i >= 0; i--){
            if (path[i] === '/'){
                return i;
            }
        }
        return 0;
    }
    const componentName = path.substring(slashpostion(path)+1, path.length);
    return componentName;
}


export default function Content(){
    const route = useLocation();
    console.log(route.pathname)
    console.log(findPath(route.pathname));

    return (
        <div className='Content'>

            {/*Assignments*/}
            <Route path='/action/assignments/CreateAssignment'>
                <CreateAssignment />
            </Route>
            <Route path='/action/assignments/EvaluateAssignment'>
                <EvaluateAssignment />
            </Route>


            {/*Chat*/}
            <Route path='/action/chats/Classes'>
                <ChatClasses />
            </Route>


            {/*Exams*/}
            <Route path='/action/exams/CreateTest'>
                <CreateTest />
            </Route>
            <Route path='/action/exams/EvaluateTest'>
                <EvaluateTest />
            </Route>


            {/*Lectures*/}
            <Route path='/action/lectures/subjects'>
                <Subjects />
            </Route>


            {/*Performance*/}
            <Route path='/action/performance/attendance'>
                <Attendance />
            </Route>
            <Route path='/action/performance/TestResults'>
                <TestResults />
            </Route>


            {/*Profile*/}
            <Route path='/action/profile/classes'>
                <Classes />
            </Route>
            <Route path='/action/profile/feedback'>
                <Feedback />
            </Route>
            <Route path='/action/profile/profile'>
                <Profile />
            </Route>
            {/*<Route redirectTo=''>*/}
            {/*    <Profile />*/}
            {/*</Route>*/}
        </div>
    );
};
// export class Content extends React.Component {
//     render() {
//         return (
//             <div className='Content'>
//                 <Route path='/action/assignments/CreateAssignment'>
//                     <CreateAssignment />
//                 </Route>
//             </div>
//         );
//     }
// }

