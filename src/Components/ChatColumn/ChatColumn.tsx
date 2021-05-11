import { FC, useState } from "react";
// Components
import ChatColumnHeader from "./ChatColumnHeader/ChatColumnHeader";
import ChatColumnMessages from "./ChatColumnMessages/ChatColumnMessages";
// Context
// Hooks
// Pages
// Resources

interface MessagesProps {
    from: {
        username: string;
        date: string;
    };
    msg: {
        message: string;
    };
}
interface ChatProps {
    id: number;
    nome: string;
    img: string;
    online: boolean;
    unreadMsg: number;
    msgs: MessagesProps[];
}
export interface Props {
    chats: ChatProps[];
}

const ChatColumn: FC<Props> = ({ chats }: Props) => {
    const [searchInput, setSearchInput] = useState<string>("");

    return (
        <div className="bg-white-300 h-full w-full grid grid-rows-[auto,1fr]">
            <ChatColumnHeader setSearch={(inputValue: string) => setSearchInput(inputValue)} />
            <ChatColumnMessages chats={chats} inputValue={searchInput} />
        </div>
    );
};

export default ChatColumn;
