import { FC } from "react";
import clsx from "clsx";
import moment from "moment";
// Components
// Media
// Context
// Hooks
// Pages
// Resources

export interface Props {
    setChat: Function;
    userAvatar: string;
    userName: string;
    isUserOnline: boolean;
    msgText: string;
    lastMsgTime: Date;
    msgsNum: number;
    active: boolean;
}


const ChatBox: FC<Props> = ({ setChat, userAvatar, userName, isUserOnline, msgText, lastMsgTime, msgsNum, active }) => {
    const dateAgo = (): string => {
        return moment(lastMsgTime).fromNow();
    };

    const clickEvent = () => {
        setChat();
    };


const ChatBox: FC<Props> = ({ userAvatar, userName, msgText, lastMsgTime, msgsNum, active, isUserOnline }) => {

    return (
        <button
            onClick={() => clickEvent()}
            className={clsx(
                active
                    ? " bg-gradient-to-r from-blue-start to-blue-end "
                    : "bg-white-100 hover:bg-blueExt-300 transition-all ease-in-out duration-200",
                "w-auto h-auto",
                "grid grid-cols-[auto,1fr,auto] gap-4 p-7 rounded-md",
                "outline-none focus:outline-none",
            )}
        >
            <div className="h-[54px] w-[54px] relative">

                <img src={userAvatar} alt="" className="rounded-full absolute h-[54px] w-[54px]" />
                {isUserOnline && (
                    <span className="right-9 h-[10px] w-[10px] bg-green-500 absolute rounded-full shadow-onlineCircle"></span>
                )}

            </div>

            <span className="font-bold text-xs sm:text-sm md:text-base text-black mr-auto">{userName}</span>

            <span
                className={clsx(
                    active ? "text-white-100 opacity-75" : "text-gray",
                    "justify-self-end",
                    "text-xs sm:text-sm md:text-base",
                )}
            >
                {dateAgo()}
            </span>

            <div className="col-span-full grid grid-cols-[1fr,auto] gap-x-5">
                <p
                    className={clsx(
                        active ? "text-white-100" : "text-gray",
                        "text-justify text-sm sm:text-base line-clamp-3",
                    )}
                >
                    {msgText}
                </p>

                {msgsNum > 0 && !active && (
                    <div className="relative px-3">
                        <div className="bg-pink absolute rounded-full h-[20px] w-[20px] grid place-items-center animate-ping" />
                        <div className="bg-pink absolute rounded-full h-[20px] w-[20px] grid place-items-center">
                            <span className="text-white-100 text-[13px]">{msgsNum}</span>
                        </div>
                    </div>
                )}
            </div>
        </button>
    );
};

export default ChatBox;
