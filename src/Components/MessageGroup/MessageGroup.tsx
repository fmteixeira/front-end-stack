import { FC } from "react";
import Message from "./Message";
// Components
//Media
// Context
// Hooks
// Pages
import { Message as MessageInterface, MessageFile as MessageFileInterface } from "../../resources/typing/interfaces";
import MessageFile from "./MessageFile";
// Resources

export interface Props {
    userAvatar: string;
    messages: Array<MessageInterface | MessageFileInterface>;
}

const MessageGroup: FC<Props> = ({ messages, userAvatar }) => {

    function isMessageFile(msg: MessageInterface | MessageFileInterface): msg is MessageFileInterface {
        return (msg as MessageFileInterface).fileName !== undefined;
      }

    return (
        <div className="grid gap-5 grid-cols-[auto,1fr]">
            <div>
                <img src={userAvatar} alt="" className="rounded-full h-[36px] w-[36px]" />
            </div>

            <div className="grid gap-5 place-items-start">
                {messages.map((msg, idx) => (
                    isMessageFile(msg) ?
                    <MessageFile
                    key={msg.id}
                    text={msg.text}
                    date={msg.date}
                    fileName={msg.fileName}
                    fileSize={msg.fileSize}
                    isLast={idx + 1 === messages.length}
                />
                    :
                    <Message
                        key={msg.id}
                        text={msg.text}
                        date={msg.date}
                        isLast={idx + 1 === messages.length}
                    />
                ))}
            </div>
            
        </div>
    );
};

export default MessageGroup;
