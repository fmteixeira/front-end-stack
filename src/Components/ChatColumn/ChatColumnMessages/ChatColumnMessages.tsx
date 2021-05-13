import { FC, useState } from "react";
// Components
import ChatBox from "../../ChatBox/ChatBox";
// Context
// Hooks
// Pages
// Resources
import { Chat } from "../../../resources/typing/interfaces";
interface Props {
    chats: Chat[];
    inputValue: string;
}

const ChatColumnMessages: FC<Props> = ({ chats, inputValue }: Props) => {
    const [currentChat, setCurrentChat] = useState<number>(1);

    const nameSearch = (value: string): string => {
        return value.toLowerCase().replace(/\s/g, "");
    };

    return (
        <div className="h-full overflow-y-auto p-2">
            <div className="grid gap-y-3">
                {chats.map((chat, index) => {
                    return (
                        nameSearch(chat.name).includes(nameSearch(inputValue)) && (
                            <ChatBox
                                key={chat.id}
                                setChat={() => setCurrentChat(index)}
                                chat={chat}
                                active={currentChat === chat.id}
                            />
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default ChatColumnMessages;
