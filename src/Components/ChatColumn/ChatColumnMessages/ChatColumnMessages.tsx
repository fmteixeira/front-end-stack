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

    nameSearch(inputValue);

    return (
        <div className="h-full overflow-y-auto p-2">
            <div className="grid gap-y-3">
                {chats.map((chat, index) => {
                    return (
                        nameSearch(chat.nome).includes(nameSearch(inputValue)) && (
                            <ChatBox
                                key={chat.id}
                                setChat={() => setCurrentChat(index)}
                                userAvatar={chat.img}
                                userName={chat.nome}
                                isUserOnline={chat.online}
                                msgText={chat.msgs[chat.msgs.length - 1] && chat.msgs[chat.msgs.length - 1].msg.message}
                                lastMsgTime={chat.msgs[chat.msgs.length - 1] && chat.msgs[chat.msgs.length - 1].from.date}
                                msgsNum={chat.unreadMsg}
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
