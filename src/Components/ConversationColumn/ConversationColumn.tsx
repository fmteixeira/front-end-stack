import { FC, useState } from "react";
import MessageGroup from "../MessageGroup/MessageGroup"
import ChatInput from "../ChatInput/ChatInput"
import ChatHeader from "../ChatHeader/ChatHeader"
import DayLine from "../DayLine/DayLine"
import moment from "moment";
import userAvatar from "../../resources/media/icons/userAvatar.svg"


import {Message as MessageTextInterface, MessageFile as MessageFileInterface} from "../../resources/typing/interfaces"
import clsx from "clsx";

// Components
// Context
// Hooks
// Pages
// Resources

export interface Props {
    avatarIcon: string,
    name: string,
    messages: Array<MessageTextInterface | MessageFileInterface>
};

const ConversationColumn: FC<Props> = ({avatarIcon, name, messages}) => {


    const groupMessages = (messages: Array<MessageTextInterface | MessageFileInterface>) =>{
        return messages.reduce(
            (acc:Array<Array<MessageTextInterface | MessageFileInterface>>, 
                value:MessageTextInterface | MessageFileInterface) => {
            // compare the current value with the last item in the collected array
            if (acc.length && acc[acc.length - 1][0].userId === value.userId) {
              // append the current value to it if it is matching
              acc[acc.length - 1].push(value);
            } else {
              // append the new value at the end of the collected array
              acc.push([value]);        }
            return acc;
          }, []);
    }

    const userId = 1;

    const [currentMessages, setCurrentMessages]=useState<Array<Array<MessageTextInterface | MessageFileInterface>>>(groupMessages(messages));
    
    const sendMessage = (text:string)=> {
        if (currentMessages[currentMessages.length -1 ][0].userId === userId) {
            setCurrentMessages( [...currentMessages.slice(0,-1), [...currentMessages[currentMessages.length -1], 
            {userId:userId, text:text, id:20, date: new Date (2021,5,13)
            }]])
            }

        console.log(currentMessages)
    }


    return (
        <div>
        <div className="h-160 bg-white-100 grid grid-rows-[auto,1fr,auto]">
            <ChatHeader avatarIcon={avatarIcon} name={name} />
            <div className="overflow-y-auto pb-10  grid gap-5 mr-8 ml-8" >
            {currentMessages.map((messageGroup, idx) => { return(
                <div className={clsx("grid", 
                messageGroup[0].userId === userId ? "grid-cols-[1fr,4fr]":"grid-cols-[4fr,1fr]")}>
                    <div className={clsx(messageGroup[0].userId === userId && "col-start-2")}>
                    <MessageGroup key={idx} userAvatar={userAvatar} messages={messageGroup} isActiveUser={messageGroup[0].userId === 1}/>
                    </div>
                </div>
            )})}
            </div>
            <div className="mr-8 ml-8 mb-5" >
            <ChatInput handleSubmit={(text:string) => sendMessage(text)}/>
            </div>
            
        </div>
       <div>
            <button onClick={() => console.log(currentMessages[currentMessages.length -1 ][0].userId === userId)}>asdfasdfasdf </button>
       </div>
       </div>
    );
};

export default ConversationColumn;