import { FC, useState } from "react";
// Components
import ChatColumnHeader from "./ChatColumnHeader/ChatColumnHeader";
import ChatColumnMessages from "./ChatColumnMessages/ChatColumnMessages";
// Context
// Hooks
// Pages
// Resources
import { ChatMessages } from "../../resources/typing/interfaces";
export interface Props {
    chats?: ChatMessages[];
    setChat: (index: number) => void;
}

const ChatColumn: FC<Props> = ({ chats, setChat }: Props) => {
    const [searchInput, setSearchInput] = useState<string>("");

    const setChatEvent = (index: number): void => {
        setChat(index);
    };

    return (
        <div className="h-screen w-full grid grid-rows-[auto,1fr]">
            <ChatColumnHeader setSearch={setSearchInput} />
            <ChatColumnMessages chats={chats} inputValue={searchInput} setChat={setChatEvent} />
        </div>
    );
};

export default ChatColumn;
