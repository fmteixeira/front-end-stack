import clsx from "clsx";
import { FC } from "react";
// Components
//Media
import ellipsis from "../../../resources/media/icons/ellipsis.svg";
import file from "../../../resources/media/icons/file.svg";

import MessageLastDate from "../MessageLastDate";
// Context
// Hooks
// Pages
// Resources

export interface Props {
    date: Date;
    isLast: boolean;
    text?: string;
    fileName: string;
    fileSize: string;
    isActiveUser: boolean;
}

const MessageFile: FC<Props> = ({ text, date, isLast, fileName, fileSize, isActiveUser }) => {
    return (
        <div
            className={clsx("grid gap-3 items-center", isActiveUser ? "grid-cols-[auto,1fr]" : "grid-cols-[1fr,auto]")}
        >
            <div
                className={clsx(
                    "p-3 rounded-xl shadow-lg ",
                    isActiveUser
                        ? "rounded-br-none bg-white-100 text-gray border-solid border-gray border-2 border-opacity-25 order-2"
                        : " rounded-tl-none bg-gradient-to-r from-blue-start to-blue-end text-white-100 ",
                )}
            >
                {text === undefined ? (
                    <button
                        className={clsx(
                            "grid gap-x-3 items-center",
                            isActiveUser ? "grid-cols-[1fr,auto]" : "grid-cols-[auto,1fr]",
                        )}
                    >
                        <div
                            className={clsx(
                                isActiveUser ? "bg-gray order-2" : "bg-white-100",
                                "h-10 w-10 grid place-items-center rounded-md bg-opacity-25",
                            )}
                        >
                            <img className="filter brightness-0 invert" src={file} alt=""></img>
                        </div>

                        <div className={clsx("grid items-start", isActiveUser ? "text-right" : "text-left")}>
                            <span className="break-all">{fileName}</span>
                            <span className="text-sm">{fileSize}</span>
                        </div>
                    </button>
                ) : (
                    <div className="grid gap-y-1">
                        <p className={clsx(isActiveUser && "text-right")}>{text}</p>
                        <button
                            className={clsx(
                                "grid items-start ",
                                isActiveUser ? "grid-cols-[1fr,auto] justify-self-end" : "grid-cols-[auto,1fr]",
                            )}
                        >
                            <img
                                src={file}
                                alt=""
                                className={clsx(isActiveUser ? "order-1" : "filter brightness-0 invert")}
                            />
                            <span className={clsx(isActiveUser ? "text-blue text-right" : "text-left", "break-all")}>
                                ({fileSize}) {fileName}
                            </span>
                        </button>
                    </div>
                )}
            </div>

            <button className={clsx(isActiveUser && "order-1")}>
                <img src={ellipsis} alt="" />
            </button>

            <div className={clsx(isActiveUser ? "order-3 col-start-2 justify-self-start" : "justify-self-end")}>
                {isLast && <MessageLastDate date={date} />}
            </div>
        </div>
    );
};

export default MessageFile;
