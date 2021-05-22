import { FC, useState } from "react";
import clsx from "clsx";
// Components
import SideBar from "../SideBar/SideBar";
import ChatColumn from "../ChatColumn/ChatColumn";
// Context
// Hooks
// Pages
// Resources
import { ChatMessages } from "../../resources/typing/interfaces";

export interface Props {
    username: string;
    avatarUrl: string;
    chats?: ChatMessages[];
}

const Chat: FC<Props> = ({ username, avatarUrl, chats }: Props) => {
    const [currentChat, setCurrentChat] = useState<number | null>(null);

    const setChatEvent = (index: number): void => {
        setCurrentChat(index);
    };

    return (
        <div className="bg-white-300 h-screen grid grid-cols-[auto,1fr]">
            <SideBar username={username} avatarUrl={avatarUrl} />
            <div>
                <div className="relative md:static md:container md:grid grid-cols-1 md:grid-cols-[1fr,1fr] overflow-hidden">
                    <ChatColumn chats={chats} setChat={setChatEvent} />
                    <div
                        className={clsx(
                            currentChat != null ? "left-0" : "left-full",
                            "absolute md:static top-0 w-full h-screen bg-blue transition-all ease-out duration-700",
                        )}
                    >
                        {chats && currentChat != null && chats[currentChat].name}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
