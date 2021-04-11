import React from "react";
import './ChatSectionHeader.css';
import { BsThreeDotsVertical } from "react-icons/all";

export class ChatSectionHeader extends React.Component<any, any> {
    render() {
        return (
            <div className="ChatSectionHeader bg-blue-800">
                <div className='flex justify-between w-full h-full align-middle items-center'>
                    <div className=''>
                        <img className="inline object-cover w-8 h-8 rounded-full ml-3"
                             src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                             alt="Profile image"/>
                        <span className='ml-2'>
                            Prasadthx
                        </span>
                    </div>
                    <div className='mr-2'>
                        <BsThreeDotsVertical/>
                    </div>
                </div>
            </div>
        );
    }
}