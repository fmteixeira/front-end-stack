import { FC, useState} from "react";
import Attachment from "./Attachment"
import CircleIcon from "./CircleIcon"
// Components
// Context
// Hooks
// Pages
import plus from "../../resources/media/icons/plus.svg";
import smile from "../../resources/media/icons/smile.svg"
import send from "../../resources/media/icons/send.svg"
// Resources

export interface Props {}

const ChatInput: FC<Props> = ({}) => {

    const [showOptions, setShowOptions] = useState(false)

    return (
        <div className="grid gap-y-2">

        {showOptions && <Attachment></Attachment>}

        <div className="grid grid-cols-[auto,1fr,auto] gap-x-4 items-center ">
            <button onClick={() => setShowOptions(!showOptions)}>
                <CircleIcon icon={plus} gradient={true}></CircleIcon>
            </button>

            <input  
                className="w-full min-w-0 text-base sm:text-xl bg-transparent text-gray"
                type="text" 
                placeholder="Type a message here"
            >
            </input>


            <div className="grid grid-cols-2 gap-x-3 place-items-center">
                <button><img src={smile} alt=""></img></button>
                <button><CircleIcon icon={send} gradient={true}></CircleIcon></button>
            </div>
        </div>
        </div>

    );
};

export default ChatInput;
