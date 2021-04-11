import React from "react";
import './Classes.css'
import {ChatSectionContent} from './ChatSectionContent';
import {ChatSectionHeader} from "./ChatSectionHeader";

export class Classes extends React.Component<any,any>{
    render() {
        return (
            <div className="Classes">
                <div className="chatWindow flex">
                    <div className="recipients h-full bg-white flex flex-col border-r-2">
                        <div className="recipientsHeader bg-blue-800 flex justify-evenly items-center">
                            <div>
                                <img className="inline object-cover w-8 h-8 rounded-full"
                                     src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                     alt="Profile image"/>
                            </div>
                            <div>
                                NoteChat
                            </div>
                            <div>
                                Hello User,
                            </div>
                        </div>
                        <div className="recipientsSidebar">

                        </div>
                    </div>
                    <div className="chatSection h-full bg-white flex flex-col">
                        <ChatSectionHeader/>
                        <ChatSectionContent/>
                    </div>
                </div>
            </div>
        );
    }
}