import React from "react";
import './MainContent.css';
import {MainHeader} from "./MainHeader";
import Content from './Content'

export class MainContent extends React.Component<any,any>{
    render(){
        const MainContentClass = (this.props.sidebarStatus == 'before') ? 'MainContent' : 'ToggleMainContent';
        return (
            <div className={MainContentClass+' flex flex-col'}>
                <MainHeader toggleSidebar={this.props.toggleSidebar}/>
                <Content/>
            </div>
        );
    }
}