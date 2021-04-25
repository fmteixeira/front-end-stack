import { FC } from "react";
import Message from "./Message";
// Components
//Media
// Context
// Hooks
// Pages
import { Message as MessageInterface } from "../../resources/typing/interfaces";
// Resources

export interface Props {
    userAvatar: string;
    messages: Array<MessageInterface>;
}

const MessageGroup: FC<Props> = ({ messages, userAvatar }) => {
    return (
        <div className="grid gap-5 grid-cols-[auto,1fr]">
            <div>
                <img src={userAvatar} alt="" className="rounded-full h-[36px] w-[36px]" />
            </div>

            <div className="grid gap-5 place-items-start">
                {messages.map((msg, idx) => (
                    <Message key={msg.id} text={msg.text} date={msg.date} isLast={idx + 1 === messages.length}></Message>
                ))}
            </div>
        </div>
    );
};

export default MessageGroup;
