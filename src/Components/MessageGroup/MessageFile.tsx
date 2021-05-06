import { FC } from "react";
// Components
//Media
import ellipsis from "../../resources/media/icons/ellipsis.svg";
import file from "../../resources/media/icons/file.svg";

import MessageLastDate from "./MessageLastDate";
// Context
// Hooks
// Pages
// Resources

interface Props {
    date: Date;
    isLast: boolean;
    text?: string;
    fileName: string;
    fileSize:string
}

const MessageFile: FC<Props> = ({ text, date, isLast, fileName, fileSize}) => {
    return (
        <div className="grid grid-cols-[1fr,auto] gap-3 place-items-center">
            <div
                className="p-3 text-base rounded-xl rounded-tl-none bg-gradient-to-r
                            from-blue-start to-blue-end text-white-100 shadow-lg"
            >
            { text === undefined ?
            <button className="grid grid-cols-[auto,1fr] gap-x-3 place-items-center">    

                <div className="h-10 w-10 bg-white-100 bg-opacity-25 grid place-items-center rounded-md">
                    <img src={file} alt=""></img>
                </div>

                <div className="grid grid-cols-[auto] items-start text-left">
                    <span>{fileName}</span>                    
                    <span className="text-sm">{fileSize}</span>
                </div>
            </button>
            :
            <div className="grid gap-y-1"> 
                <p>{text}</p>
                <button className="grid grid-cols-[auto,1fr] items-start">
                    <img src={file} alt=""/>
                    <span className="text-left">({fileSize}) {fileName}</span>
                </button>
            </div>
            }

            </div>

            <button>
                <img src={ellipsis} alt="" />
            </button>

            {isLast && <MessageLastDate date={date} />}
        </div>
    );
};

export default MessageFile;
