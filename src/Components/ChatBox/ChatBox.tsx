import { FC } from "react";
import clsx from "clsx";
import moment from "moment";
// Components
// Media
import { ReactComponent as PhotoFile } from "../../resources/media/icons/photoFile.svg";
// Context
// Hooks
// Pages
// Resources
import {
    ChatMessages,
    Message as MessageInterface,
    MessageFile as MessageFileInterface,
} from "../../resources/typing/interfaces";

export interface Props {
    setChat: () => void;
    chat: ChatMessages;
    active: boolean;
    lastMessage?: MessageInterface | MessageFileInterface;
}

const ChatBox: FC<Props> = ({ setChat, chat, active, lastMessage }) => {
    function isMessageFile(msg: MessageInterface | MessageFileInterface): msg is MessageFileInterface {
        return (msg as MessageFileInterface).file !== undefined;
    }

    return (
        <button
            onClick={() => setChat()}
            className={clsx(
                active
                    ? " bg-gradient-to-r from-blue-start to-blue-end "
                    : "bg-white-100 hover:bg-blueExt-300 transition-all ease-in-out duration-200",
                "w-full h-auto",
                "grid grid-cols-[auto,1fr,auto] gap-4 p-7 rounded-md",
                "outline-none focus:outline-none",
            )}
        >
            <div className="h-[54px] w-[54px] relative">
                <img src={chat.img} alt="" className="rounded-full absolute h-[54px] w-[54px]" />
                {!chat.online && (
                    <span className="right-9 h-[10px] w-[10px] bg-green-500 absolute rounded-full shadow-onlineCircle"></span>
                )}
            </div>

            <span className="font-bold text-xs sm:text-sm md:text-base text-black mr-auto">{chat.name}</span>

            {lastMessage && (
                <span
                    className={clsx(
                        active ? "text-white-100 opacity-75" : "text-gray",
                        "justify-self-end",
                        "text-xs sm:text-sm md:text-base",
                    )}
                >
                    {moment(lastMessage.date).fromNow()}
                </span>
            )}

            <div className="col-span-full grid grid-cols-[1fr,auto] gap-x-5">
                {lastMessage && (
                    <p
                        className={clsx(
                            active ? "text-white-100" : "text-gray",
                            "text-justify text-sm sm:text-base line-clamp-3",
                        )}
                    >
                        {isMessageFile(lastMessage) ? <PhotoFile /> : lastMessage.text}
                    </p>
                )}

                {chat.unreadMessageCounter > 0 && !active && (
                    <div className="relative px-3">
                        <div className="bg-pink absolute rounded-full h-[20px] w-[20px] grid place-items-center animate-ping" />
                        <div className="bg-pink absolute rounded-full h-[20px] w-[20px] grid place-items-center">
                            <span className="text-white-100 text-[13px]">{chat.unreadMessageCounter}</span>
                        </div>
                    </div>
                )}
            </div>
        </button>
    );
};

export default ChatBox;
