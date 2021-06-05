import { FC, useState } from "react";
import clsx from "clsx";
// Components
import SideBar from "../SideBar/SideBar";
import ChatColumn from "../ChatColumn/ChatColumn";
import ConversationColumn from "../ConversationColumn/ConversationColumn";
// Context
// Hooks
// Pages
// Resources
import { ChatMessages } from "../../resources/typing/interfaces";
import { ReactComponent as ConversationIcon } from "../../resources/media/icons/conversationIcon.svg";

export interface Props {
    username: string;
    avatarUrl: string;
    chats?: ChatMessages[];
}

const Chat: FC<Props> = ({ username, avatarUrl, chats }: Props) => {
    const [currentChat, setCurrentChat] = useState<number | null>(null);
    const [activeChat, setActiveChat] = useState<boolean>(false);

    const setChatNull = (): void => {
        setActiveChat(false);
    };

    const setChatEvent = (index: number): void => {
        setActiveChat(true);
        setCurrentChat(index);
    };

    return (
        <div className="bg-white-300 h-screen grid grid-cols-[auto,1fr]">
            <SideBar username={username} avatarUrl={avatarUrl} />
            <div>
                <div className="relative flex md:static md:container md:grid md:grid-cols-[1fr,1fr] gap-x-4 overflow-hidden">
                    <div className="block w-full">
                        <ChatColumn chats={chats} setChat={setChatEvent} />
                    </div>
                    <div
                        className={clsx(
                            activeChat ? "left-0" : "left-full",
                            "absolute md:static bottom-0 right-0 w-full h-screen transition-all ease-in-out duration-700",
                        )}
                    >
                        {chats && currentChat != null ? (
                            <ConversationColumn
                                avatarIcon={chats[currentChat].img}
                                name={chats[currentChat].name}
                                messages={chats[currentChat].messages}
                                online={chats[currentChat].online}
                                setChatNull={setChatNull}
                            />
                        ) : (
                            <div className="bg-white-100 h-screen grid justify-center items-center">
                                <div className="grid grid-flow-row auto-rows-max justify-items-center gap-y-4">
                                    <ConversationIcon />
                                    <div className="text-xl text-gray text-center">
                                        <p>Crie ou clique em alguma conversa.</p>
                                    </div>
                                    <div className="font-bold text-sm text-center">
                                        <p>Envia fotos e mensagens privadas para contacto.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
