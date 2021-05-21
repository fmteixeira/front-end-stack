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
import { DownloadableFileFormats } from "../../../resources/typing/types";
// Resources

export interface Props {
    date: Date;
    isLast: boolean;
    text?: string;
    fileName: string;
    fileSize: string;
    fileType: DownloadableFileFormats;
    fileEncoded: string;
    isActiveUser: boolean;
}

const MessageFile: FC<Props> = ({ text, date, isLast, fileName, fileSize, fileType, isActiveUser, fileEncoded }) => {
    const excelPre = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,";
    const pdfPre = "data:application/pdf;base64,";
    const imgPre = "data:image/png;base64,";

    const download = (base64: string, type: DownloadableFileFormats, fileName: string): void => {
        var a = document.createElement("a"); //Create <a>
        if (type === "Excel") a.href = `${excelPre}${base64}`;
        else if (type === "Pdf") a.href = `${pdfPre}${base64}`;
        else if (type === "Png") a.href = `${imgPre}${base64}`;
        a.download = fileName; //File name Here
        a.click(); //Downloaded file
    };

    return (
        <div
            className={clsx(
                "grid gap-1 gap-x-3 items-center",
                isActiveUser ? "grid-cols-[auto,1fr]" : "grid-cols-[1fr,auto]",
            )}
        >
            <div
                className={clsx(
                    "p-3 rounded-xl shadow-lg grid",
                    isActiveUser
                        ? "rounded-br-none bg-white-100 text-gray border-solid border-gray border-2 border-opacity-25 order-2 "
                        : " rounded-tl-none bg-gradient-to-r from-blue-start to-blue-end text-white-100 ",
                )}
            >
                {text === undefined ? (
                    <button
                        onClick={() => download(fileEncoded, fileType, fileName)}
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

                        <div className={clsx(isActiveUser ? "text-right" : "text-left")}>
                            <span className="line-clamp-1 break-all">{fileName}</span>
                            <span className="text-sm">{fileSize}</span>
                        </div>
                    </button>
                ) : (
                    <div className="grid gap-y-1 break-all">
                        <p className={clsx(isActiveUser && "text-right")}>{text}</p>

                        <button
                            onClick={() => download(fileEncoded, fileType, fileName)}
                            className={clsx(isActiveUser ? " grid grid-cols-[1fr,auto] " : "grid grid-cols-[auto,1fr]")}
                        >
                            <img
                                src={file}
                                alt=""
                                className={clsx(isActiveUser ? "order-1" : "filter brightness-0 invert")}
                            />

                            <span
                                className={clsx(
                                    isActiveUser ? "text-blue text-right" : "text-left",
                                    "line-clamp-1 break-all",
                                )}
                            >
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
