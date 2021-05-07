import { FC } from "react";
// Components
import ChatBox, {Props as ChatBoxProps} from "../../ChatBox/ChatBox"
// Context
// Hooks
// Pages
// Resources

interface Props {
    chats: ChatBoxProps[]
};



const ChatColumnMessages: FC<Props> = ({chats}: Props) => {

    return (
        <div className="h-192 overflow-y-auto p-2">
            <div className="grid gap-y-3">
                {chats.map(function (chat) {
                    return (
                        <ChatBox
                            userAvatar={chat.userAvatar}
                            userName={chat.userName}
                            msgText={chat.msgText}
                            lastMsgTime ={chat.lastMsgTime}
                            msgsNum ={chat.msgsNum}
                            active ={chat.active}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ChatColumnMessages;