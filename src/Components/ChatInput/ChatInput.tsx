import { FC, useState } from "react";
import Attachment from "./Attachment";
import CircleIcon from "./CircleIcon";
import Picker from 'emoji-picker-react';
// Components
// Context
// Hooks
// Pages
import plus from "../../resources/media/icons/plus.svg";
import smile from "../../resources/media/icons/smile.svg";
import send from "../../resources/media/icons/send.svg";
// Resources

export interface Props {}

const ChatInput: FC<Props> = ({}) => {
    const [message, setMessage] = useState("")
    const [showAttachments, setShowAttachments] = useState(false);
    const [showEmojis, setShowEmojis] = useState(false); 
    const [cursorPlace, setCursorPlace] = useState<[number, number]>([0,0]); 

    const onSelectInput = (event:React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement
        typeof target.selectionStart === "number" && 
        typeof target.selectionEnd === "number" && 
        setCursorPlace([target.selectionStart, target.selectionEnd])
    }
   
    const onEmojiClick = (event:any, emojiObject:any)=>{
        let newMensagem = message.slice(0, cursorPlace[0]) + emojiObject.emoji + message.slice(cursorPlace[1]);
        setMessage(newMensagem)
        setCursorPlace([cursorPlace[0] + 2,cursorPlace[0] + 2 ])
    }

    const onPlusClick = () => {
        setShowEmojis(false);
        setShowAttachments(!showAttachments)
    }

    const onSmileClick = ()=>{
        setShowAttachments(false);
        setShowEmojis(!showEmojis)   
    }

    return (
        <div className="grid gap-y-2">
            <div className="grid grid-cols-[auto,auto]">
                <div className="self-end">{showAttachments && <Attachment />}</div>
                <div className="justify-self-end">{showEmojis && <Picker onEmojiClick={onEmojiClick}  pickerStyle={{boxShadow: "none"}} />}</div>
            </div>
            <div className="grid grid-cols-[auto,1fr,auto] gap-x-4 items-center ">
                <button onClick={onPlusClick}>
                    <CircleIcon icon={plus} gradient={true} />
                </button>

                <input
                    className="w-full min-w-0 text-base sm:text-xl bg-transparent text-gray"
                    type="text"
                    placeholder="Type a message here"
                    value={message}
                    onSelect={(event) => onSelectInput(event)}
                    onChange={(event) => setMessage(event.target.value)}
                ></input>

                <div className="grid grid-cols-2 gap-x-3 place-items-center">
                    <button  onClick={() => onSmileClick()}>
                        <img src={smile} alt=""></img>
                    </button>
                    <button>
                        <CircleIcon icon={send} gradient={true} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
