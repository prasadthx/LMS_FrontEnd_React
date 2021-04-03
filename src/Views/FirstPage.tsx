import React from 'react';
import './FirstPage.css';
export class FirstPage extends React.Component{
    render() {
        return (
            <div className='FirstPage'>
                <svg id="svg" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg"
                     className="svg ">
                    <defs>
                        <linearGradient id="gradient">
                            <stop offset="5%" stop-color="#002bdcff"></stop>
                            <stop offset="95%" stop-color="#32ded4ff"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 0,500 C 0,500 0,250 0,250 C 175,206 350,162 590,162 C 830,162 1135,206 1440,250 C 1440,250 1440,500 1440,500 Z"
                        stroke="none" stroke-width="0" fill="url(#gradient)"
                        className=""
                        transform="rotate(-180 720 250)"></path>
                </svg>
                <div className='welcome'>
                    <div><h1> Hello Learner </h1></div>
                    <div><h2> Welcome to Dnyaan! </h2></div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        );
    }
}