import { FC, useState } from "react";
// Components
import ChatBox from "../../ChatBox/ChatBox";
// Context
// Hooks
// Pages
// Resources
import { ChatMessages } from "../../../resources/typing/interfaces";
interface Props {
    chats?: ChatMessages[];
    inputValue: string;
    setChat: (index: number) => void;
}

const ChatColumnMessages: FC<Props> = ({ chats, inputValue, setChat }: Props) => {
    const [currentChat, setCurrentChat] = useState<number | null>(null);

    const setChatEvent = (index: number): void => {
        setCurrentChat(index);
        setChat(index);
    };

    const nameSearch = (value: string): string => {
        return value.toLowerCase().replace(/\s/g, "");
    };

    return (
        <div className="h-full overflow-y-auto p-2">
            <div className="grid gap-y-3">
                {chats &&
                    chats.map((chat, index) => {
                        return (
                            nameSearch(chat.name).includes(nameSearch(inputValue)) && (
                                <ChatBox
                                    key={chat.id}
                                    setChat={() => setChatEvent(index)}
                                    chat={chat}
                                    lastMessage={chat.messages[chat.messages.length - 1]}
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
