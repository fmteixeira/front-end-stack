import { FC } from "react";
// Components
import ChatColumnHeader from "./ChatColumnHeader/ChatColumnHeader";
import ChatColumnMessages from "./ChatColumnMessages/ChatColumnMessages";
// Data
import data from "../../resources/data/data.json";
// Context
// Hooks
// Pages
// Resources

export interface Props {}

const ChatColumn: FC<Props> = ({}) => {
    console.log(data);
    return (
        <div className="bg-white-300 h-full w-full grid grid-rows-[auto,1fr]">
            <ChatColumnHeader />
            <ChatColumnMessages chats={data} />
        </div>
    );
};

export default ChatColumn;
