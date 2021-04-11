import React from "react";
import './ChatSectionContent.css'
import { GrEmoji, GrAttachment } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import { BiSmile } from "react-icons/bi"

export class ChatSectionContent extends React.Component<any,any>{
    render() {
        return (
            <div className="ChatSectionContent flex flex-col">
                <div className="chats">

                </div>
                <div className="operator flex justify-around items-center py-0 text-white">
                    <div className="emoji my-0">
                        <b><BiSmile/></b>
                    </div>
                    <div className="attachment">
                        <ImAttachment/>
                    </div>
                    <div className="typeSection text-black">
                        <form className='mx-0 px-0 mx-auto w-full'>
                            <input type="text" name="scam" className='w-full rounded-l-xl rounded-r-xl px-2'/>
                        </form>
                    </div>
                    <div className="sendMessage">
                        <RiSendPlaneFill/>
                    </div>
                </div>
            </div>
        )
    }
}