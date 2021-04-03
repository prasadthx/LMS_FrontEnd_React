import React from 'react';
import './FirstPage.css';


export class FirstPage extends React.Component{
    render() {
        return (
            <div className='FirstPage'>
                <div className='welcome rounded-b-lg'>
                    <div>
                        <button>
                            Logo
                        </button>
                    </div>
                    <div><h1 className='text-3xl'> Welcome to <br></br> Dnyaan! </h1></div>
                    <div>
                        <button>
                            Logo
                        </button>
                    </div>
                </div>
                <div>
                    <button>
                        Log In
                    </button>
                </div>
                <div className="button_cont">
                    <a className="example_e">
                    Login
                    </a>
                </div>
                {/*<svg id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg"*/}
                {/*     className="svg transition duration-300 ease-in-out delay-150">*/}
                {/*    <defs>*/}
                {/*        <linearGradient id="gradient">*/}
                {/*            <stop offset="5%" stop-color="#002bdcff"></stop>*/}
                {/*            <stop offset="95%" stop-color="#32ded4ff"></stop>*/}
                {/*        </linearGradient>*/}
                {/*    </defs>*/}
                {/*    <path*/}
                {/*        d="M 0,400 C 0,400 0,200 0,200 C 290,171 580,142 820,142 C 1060,142 1250,171 1440,200 C 1440,200 1440,400 1440,400 Z"*/}
                {/*        stroke="none" stroke-width="0" fill="url(#gradient)"*/}
                {/*        className="transition-all duration-300 ease-in-out delay-150"*/}
                {/*        transform="rotate(-180 720 200)"></path>*/}
                {/*</svg>*/}
            </div>
        );
    }
}