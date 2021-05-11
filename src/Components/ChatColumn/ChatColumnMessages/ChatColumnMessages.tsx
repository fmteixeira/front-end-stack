import { FC, useState } from "react";
// Components
import ChatBox from "../../ChatBox/ChatBox";
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
    nome: string;
    img: string;
    online: boolean;
    unreadMsg: number;
    msgs: MessagesProps[];
}
interface Props {
    chats: ChatProps[];
}

const ChatColumnMessages: FC<Props> = ({ chats }: Props) => {
    const [currentChat, setCurrentChat] = useState<number>(1);

    return (
        <div className="h-192 overflow-y-auto p-2">
            <div className="grid gap-y-3">
                {chats.map(function (chat, index) {
                    return (
                        <ChatBox
                            setChat={() => setCurrentChat(index)}
                            userAvatar={chat.img}
                            userName={chat.nome}
                            isUserOnline={chat.online}
                            msgText={chat.msgs[chat.msgs.length - 1].msg.message}
                            lastMsgTime={new Date(chat.msgs[chat.msgs.length - 1].from.date)}
                            msgsNum={chat.unreadMsg}
                            active={currentChat === index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ChatColumnMessages;
