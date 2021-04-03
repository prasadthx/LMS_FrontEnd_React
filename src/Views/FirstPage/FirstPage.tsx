import React from "react";
import logo from '../../logo.svg'
import './FirstPage.css'
import image from '../../assets/images/frontpage.svg'

export class FirstPage extends React.Component{
    render(){
        return (
            <div>
                <div className='overlay'>
                </div>
                <div className='FirstPage'>
                    <div className='top_flex bg-gray-800 opacity-70'>
                        <div className='logo'>
                            <img className='logo' style={{width:"10vh", height:"10vh"}} src={logo} alt='Logo'/>
                        </div>
                        <div>
                            <h1 className='text-3xl text-xl'>Dnyaan</h1>
                        </div>
                        <div>
                            <button>
                                No name
                            </button>
                        </div>
                    </div>

                    <div className='bottom_flex'>
                        <div className='text-5xl'>
                            Welcome To Dnyaan!
                            <br></br>
                            <div className="inline-block mr-2 mt-2">
                                <button type="button"
                                        className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-gray-600 to-gray-900 transform hover:scale-110 flex items-center">
                                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    Log In
                                </button>
                            </div>
                        </div>
                        <div className='image'>
                           <img src={image} style={{width:"70vh", height:"70vh", fontSize:'0', borderRadius:'50px'}} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}