import { FC } from "react";
import clsx from "clsx";
// Components
//Media
import ellipsis from "../../resources/media/icons/ellipsis.svg";
import MessageLastDate from "./MessageLastDate";
// Context
// Hooks
// Pages
// Resources

interface Props {
    text: string;
    date: Date;
    isLast: boolean;
    isActiveUser: boolean;
}

const MessageText: FC<Props> = ({ text, date, isLast, isActiveUser }) => {
    return (
        <div
            className={clsx("grid gap-3 items-center", isActiveUser ? "grid-cols-[auto,1fr] " : "grid-cols-[1fr,auto]")}
        >
            <p
                className={clsx(
                    "p-3 rounded-xl shadow-lg",
                    isActiveUser
                        ? "rounded-br-none bg-white-100 text-gray text-right order-2 border-solid border-2 border-gray border-opacity-25"
                        : "rounded-tl-none bg-gradient-to-r from-blue-start to-blue-end text-white-100",
                )}
            >
                {text}
            </p>

            <button className={clsx(isActiveUser && "order-1")}>
                <img src={ellipsis} alt="" />
            </button>

            <div className={clsx(isActiveUser ? "order-3 col-start-2 justify-self-start" : "justify-self-end")}>
                {isLast && <MessageLastDate date={date}> </MessageLastDate>}
            </div>
        </div>
    );
};

export default MessageText;
