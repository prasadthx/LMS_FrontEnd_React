import React from "react";
import {useState} from "react";
import ReactDOM from 'react-dom'
import './MainHeader.css';
import {FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export class MainHeader extends React.Component<any,any> {
    render() {
        return (
            <div className='MainHeader'>
                <div className='DnyaanHeader text-center flex justify-between'>
                    <div className='text-white text-2xl pl-2 pt-0.5'><FiMenu onClick={this.props.toggleSidebar}/></div>
                    <div>
                        Dnyaan
                    </div>
                    <div> Hello User </div>
                </div>
                <div className='NavigationPanel flex justify-evenly'>
                    <Link to='/action/profile/profile'><div> Profile </div></Link>
                    <Link to='/action/chat'><div> Chat </div></Link>
                    <Link to='/action/lectures'><div> Lectures </div></Link>
                    <Link to='/action/performance'><div> Student Performance </div></Link>
                    <Link to='/action/exams'><div> Exams </div></Link>
                    <Link to='/action/assignments'><div> Assignments </div></Link>
                    {/*<div> Chat </div>*/}
                    {/*<div> Lectures </div>*/}
                    {/*<div> Student Performance </div>*/}
                    {/*<div> Exams </div>*/}
                    {/*<div> Assignments </div>*/}
                </div>
            </div>
        );
    }
}