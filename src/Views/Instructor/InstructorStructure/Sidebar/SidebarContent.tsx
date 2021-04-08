import React from "react";
import './SidebarContent.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    match, RouteComponentProps
} from "react-router-dom";

export class SidebarContent extends React.Component<RouteComponentProps>{

    render() {
        const { path, url } = this.props.match;
        return (

            <div className='SidebarContent'>
                Dnyaan
                <br></br>
                {path}
            </div>
        );
    }
}