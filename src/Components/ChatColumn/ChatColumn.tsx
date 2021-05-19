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
    chats: ChatMessages[];
}

const ChatColumn: FC<Props> = ({ chats }: Props) => {
    const [searchInput, setSearchInput] = useState<string>("");

    return (
        <div className="h-screen w-full grid grid-rows-[auto,1fr]">
            <ChatColumnHeader setSearch={setSearchInput} />
            <ChatColumnMessages chats={chats} inputValue={searchInput} />
        </div>
    );
};

export default ChatColumn;
