import { FC } from "react";
// Components
import SideBar from "../../Components/SideBar/SideBar"
import ChatColumn from "../../Components/ChatColumn/ChatColumn"
// Context
// Hooks
// Pages
// Resources
import { ChatMessages } from "../../resources/typing/interfaces";

export interface Props {
    username: string;
    avatarUrl: string;
    chats: ChatMessages[]
}

const Chat: FC<Props> = ({username, avatarUrl, chats}: Props) => {
    return (
        <div className="bg-white-300 h-screen grid grid-cols-[auto,1fr]">
            <SideBar username={username} avatarUrl={avatarUrl}/>
            <ChatColumn chats={chats}/>
        </div>);
};

export default Chat;
