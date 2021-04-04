import React from "react";
import './InstructorStructure.css';


export class InstructorStructure extends React.Component{
    render() {
        return (
            <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12 dashboard">
                <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
                    <div className="flex flex-wrap items-center">
                        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                            <a href="#">
                                <span className="text-xl pl-2"><i className="em em-grinning"></i></span>
                            </a>
                        </div>
                        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                                <li className="flex-1 md:flex-none md:mr-3">
                                    <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
                                </li>
                                <li className="flex-1 md:flex-none md:mr-3">
                                    <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                                       href="#">link</a>
                                </li>
                                <li className="flex-1 md:flex-none md:mr-3">
                                    <div className="relative inline-block">
                                        <button
                                                className="drop-button text-white focus:outline-none"><span
                                            className="pr-2"><i className="em em-robot_face"></i></span> Hi, User <svg
                                            className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>


                <div className="flex flex-col md:flex-row">

                    <div
                        className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

                        <div
                            className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                                <li className="mr-3 flex-1">
                                    <a href="#"
                                       className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                        <i className="fas fa-tasks pr-0 md:pr-3"></i><span
                                        className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Tasks</span>
                                    </a>
                                </li>
                                <li className="mr-3 flex-1">
                                    <a href="#"
                                       className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                        <i className="fa fa-envelope pr-0 md:pr-3"></i><span
                                        className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Messages</span>
                                    </a>
                                </li>
                                <li className="mr-3 flex-1">
                                    <a href="#"
                                       className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600">
                                        <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span
                                        className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Analytics</span>
                                    </a>
                                </li>
                                <li className="mr-3 flex-1">
                                    <a href="#"
                                       className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                        <i className="fa fa-wallet pr-0 md:pr-3"></i><span
                                        className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Payments</span>
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </div>

                    <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

                        <div className="bg-gray-800 pt-3">
                            <div
                                className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                                <h3 className="font-bold pl-2">Analytics</h3>
                            </div>
                        </div>

                        <div className="flex flex-row flex-wrap flex-grow mt-2">

                            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}