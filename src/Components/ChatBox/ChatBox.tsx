import { FC } from "react";
import clsx from "clsx";
// Components
// Media
// Context
// Hooks
// Pages
// Resources

export interface Props {
    userAvatar: string;
    userName: string;
    msgText: string;
    lastMsgTime: number;
    msgsNum: number;
    active: boolean;
}

const ChatBox: FC<Props> = ({ userAvatar, userName, msgText, lastMsgTime, msgsNum, active }) => {
    return (
        <div
            className={clsx(
                active ? " bg-gradient-to-r from-blue-start to-blue-end " : "bg-white-100",
                "w-auto h-auto",
                "grid grid-cols-[auto,1fr,auto] gap-4 p-7 rounded-md",
            )}
        >
            <div>
                <img src={userAvatar} alt="" className="rounded-full h-[54px] w-[54px]" />
            </div>

            <span className="font-bold text-lg text-black">{userName}</span>

            <span className={clsx(active ? "text-white-100 opacity-75" : "text-gray", "justify-self-end")}>
                {lastMsgTime} minutes ago
            </span>

            <div className="col-span-full grid grid-cols-[1fr,auto] gap-x-5">
                <p className={clsx(active ? "text-white-100" : "text-gray", "text-justify line-clamp-3")}>{msgText}</p>

                {msgsNum > 0 && !active && (
                    <div className="bg-pink rounded-full h-[20px] w-[20px] grid place-items-center">
                        <span className="text-white-100 text-[13px]">{msgsNum}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatBox;
