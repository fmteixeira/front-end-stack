import { FC } from "react";
import clsx from "clsx";
// Components
// Media
import search from "../../resources/media/icons/search.svg";
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
    // FIXME: Center msgNum text on circle (l.53) +9?
    // TODO: Dynamic time ago
    // FIXME: text-[13px]
    return (
        <div
            className={clsx(
                active ? " bg-gradient-to-r from-blue-start to-blue-end " : "bg-white-100",
                "w-[580px] h-[220px]",
                "grid grid-cols-[54px,auto,auto] gap-4 p-7 rounded-md",
            )}
        >
            <img src={userAvatar} alt="" className="rounded-full h-[54px] w-[54px]" />

            <div className="font-bold text-lg text-black">{userName}</div>

            <div className={clsx(active ? "text-white-100 opacity-75" : "text-gray", "justify-self-end")}>
                {lastMsgTime} minutes ago
            </div>

            <div className="col-span-full overflow-hidden grid grid-cols-[auto,25px] gap-x-5">
                <div
                    className={clsx(
                        active ? "text-white-100" : "text-gray",
                        "col-start-1 col-end-2 text-gray",
                        "text-justify",
                    )}
                >
                    {msgText}
                </div>
                {msgsNum > 0 && !active && (
                    <div className="bg-pink rounded-full h-[20px] w-[20px] grid">
                        <div className="text-white-100 text-[13px] justify-self-center self-center">{msgsNum}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatBox;
