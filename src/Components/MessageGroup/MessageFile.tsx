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
            { text === undefined &&
            <div className="grid grid-cols-[auto,1fr] gap-x-3 place-items-center">    
                <div className="h-10 w-10 bg-white-100 bg-opacity-100 grid place-items-center rounded-md">
                    <img src={file} alt=""></img>
                </div>

                <div className="grid grid-cols-[auto]">
                    <span>{fileName}</span>                    
                    <span>{fileSize}</span>
                </div>
            </div>
            }

            { text !== undefined &&
            <div className="grid gap-y-1"> 
                <p className="text-gray">{text}</p>
                <button><span className="flex"><img src={file} alt="" />({fileSize}) {fileName}</span></button>
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
