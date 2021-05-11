import { FC } from "react";
import MessageText from "./MessageText";
import clsx from "clsx";
// Components
//Media
// Context
// Hooks
// Pages
import { Message as MessageInterface, MessageFile as MessageFileInterface } from "../../resources/typing/interfaces";
import MessageFile from "./MessageFile/MessageFile";
// Resources

export interface Props {
    userAvatar: string;
    messages: Array<MessageInterface | MessageFileInterface>;
    isActiveUser: boolean;
}

const MessageGroup: FC<Props> = ({ messages, userAvatar, isActiveUser }) => {
    function isMessageFile(msg: MessageInterface | MessageFileInterface): msg is MessageFileInterface {
        return (msg as MessageFileInterface).file !== undefined;
    }

    return (
        <div className={clsx("grid gap-5", !isActiveUser && "grid-cols-[auto,1fr]")}>
            {!isActiveUser && (
                <div>
                    <img src={userAvatar} alt="" className="rounded-full h-[36px] w-[36px]" />
                </div>
            )}

            <div
                className={clsx("grid gap-2 items-center", isActiveUser ? "justify-items-end" : "justify-items-start")}
            >
                {messages.map((msg, idx) =>
                    isMessageFile(msg) ? (
                        <MessageFile
                            key={msg.id}
                            text={msg.text}
                            date={msg.date}
                            fileName={msg.file.fileName}
                            fileType={msg.file.fileType}
                            fileSize={msg.file.fileSize}
                            fileEncoded={msg.file.fileEncoded}
                            isLast={idx + 1 === messages.length}
                            isActiveUser={isActiveUser} //provisório - as alterações no messageGroup estão feitas noutro branch
                        />
                    ) : (
                        <MessageText
                            key={msg.id}
                            text={msg.text}
                            date={msg.date}
                            isLast={idx + 1 === messages.length}
                            isActiveUser={isActiveUser}
                        />
                    ),
                )}
            </div>
        </div>
    );
};

export default MessageGroup;
