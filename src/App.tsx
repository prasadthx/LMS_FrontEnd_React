import './App.css';
import React from "react";
import {FirstPage} from "./Views/FirstPage/FirstPage";
import {Footer} from "./Views/Footer/Footer";
import {BrowserRouter, Route, withRouter, RouteComponentProps} from "react-router-dom";
import {LoginPage} from "./Views/LoginPage/LoginPage";
import {InstructorAction} from "./Views/Instructor/InstructorAction";
import {InstructorStructure} from './Views/Instructor/InstructorStructure/InstructureStructure'
import {StudentStructure} from "./Views/Student/StudentStructure";

export class App extends React.Component<RouteComponentProps>{
    render() {
        return (
            <BrowserRouter>
            <div className="App">
                {/*<FirstPage/>*/}

                {/*<BrowserRouter>*/}
                    <Route path='/' exact component={FirstPage}/>
                    <Route path='/login' exact component={LoginPage}/>
                    <Route path='/instructor' exact component={InstructorAction} />
                    <Route path='/action' exact component={InstructorStructure} {...this.props}/>
                    <Route path='/student' exact component={StudentStructure}/>
                {/*</BrowserRouter>*/}
                <Footer />
            </div>
            </BrowserRouter>
        );
    }
}

export default withRouter(App);
