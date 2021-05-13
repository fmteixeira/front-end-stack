import { FC, useState } from "react";
// Components
import ChatColumnHeader from "./ChatColumnHeader/ChatColumnHeader";
import ChatColumnMessages from "./ChatColumnMessages/ChatColumnMessages";
// Context
// Hooks
// Pages
// Resources
import { Chat } from "../../resources/typing/interfaces";
export interface Props {
    chats: Chat[];
}

const ChatColumn: FC<Props> = ({ chats }: Props) => {
    const [searchInput, setSearchInput] = useState<string>("");

    return (
        <div className="bg-white-300 h-full w-full grid grid-rows-[auto,1fr]">
            <ChatColumnHeader setSearch={setSearchInput} />
            <ChatColumnMessages chats={chats} inputValue={searchInput} />
        </div>
    );
};

export default ChatColumn;
