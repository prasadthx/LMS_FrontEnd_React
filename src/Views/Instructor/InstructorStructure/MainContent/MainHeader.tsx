import React from "react";
import {useState} from "react";
import ReactDOM from 'react-dom'
import './MainHeader.css';

export class MainHeader extends React.Component<any,any> {
    render() {
        return (
            <div className='MainHeader'>
                <div className='DnyaanHeader text-center flex justify-between'>
                    <div><img src="https://img.icons8.com/ios/24/000000/menu--v1.png" /></div>
                    <div>
                        Dnyaan
                        <button onClick={this.props.toggleSidebar}>
                            Toggle
                        </button>
                    </div>
                    <div> Hello User </div>
                </div>
                <div className='NavigationPanel flex justify-evenly'>
                    <div> Profile </div>
                    <div> Chat </div>
                    <div> Lectures </div>
                    <div> Student Performance </div>
                    <div> Exams </div>
                    <div> Assignments </div>
                </div>
            </div>
        );
    }
}