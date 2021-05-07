import { FC } from "react";
// Components
import ChatColumnHeader from "./ChatColumnHeader/ChatColumnHeader";
import ChatColumnMessages from "./ChatColumnMessages/ChatColumnMessages";
import {Props as ChatBoxProps} from "../ChatBox/ChatBox"
// Context
// Hooks
// Pages
// Resources

export interface Props {
    chats: ChatBoxProps[]
};

const ChatColumn: FC<Props> = ({chats}: Props) => {

    return (
        <div className="bg-white-300 h-full w-full grid grid-rows-[auto,1fr]">
            <ChatColumnHeader/>
            <ChatColumnMessages chats={chats}/>
        </div>
    );
};

export default ChatColumn;