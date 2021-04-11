import React from "react";
import {useState} from "react";
import ReactDOM from 'react-dom'
import './MainHeader.css';
import {FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export class MainHeader extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            focused:0
        }
    };
    render() {
        const HeaderOptions = [
            ['Profile' ,
                'profile/profile'
            ],
            ['Performance' ,
                'performance'
            ],
            ['Lectures' ,
                'lectures'
            ],
            ['Chat' ,
                'chat'
            ],
            ['Exam' ,
                'exams'
            ],
            ['Assignments',
                'assignments'
            ],
        ]
        return (
            <div className='MainHeader'>
                <div className='DnyaanHeader text-center flex justify-between'>
                    <div className='text-white text-2xl pl-2 pt-0.5'><FiMenu onClick={this.props.toggleSidebar}/></div>
                    <div>
                        Dnyaan
                    </div>
                    <div> Hello User </div>
                </div>
                <div className='NavigationPanel flex justify-evenly align-middle items-center text-center w-full h-full'>
                    {/*<Link {...index} to='/action/profile/profile' className='w-full h-full items-center'><div className='flex-1 w-full'>Profile{index}</div></Link>*/}
                    {/*<Link to='/action/performance' className='w-full h-full'><div className='flex-1'>Performance</div></Link>*/}
                    {/*<Link to='/action/lectures' className='w-full h-full'><div className='flex-1'>Lectures</div></Link>*/}
                    {/*<Link to='/action/chat' className='w-full h-full'><div className='flex-1'>Chat</div></Link>*/}
                    {/*<Link to='/action/exams' className='w-full h-full'><div className='flex-1'>Exams</div></Link>*/}
                    {/*<Link to='/action/assignments' className='w-full h-full'><div className='flex-1'>Assignments</div></Link>*/}
                    {HeaderOptions.map((option:any, index:number) =>
                        <Link to={'/action/' + option[1]}
                              onClick={(e) => {
                                  console.log(option, index);
                                  this.setState({
                                      focused: index,
                                  })
                              }}
                              className={index==this.state.focused?'bg-black w-full h-full':'w-full h-full'}
                              key={index}
                        >
                            <div className='flex-1 w-full h-full'>
                                {option[0]}
                            </div>
                        </Link>)}

                </div>
            </div>
        );
    }
}