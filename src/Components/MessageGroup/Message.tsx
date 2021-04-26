import { FC } from "react";
// Components
//Media
import ellipsis from "../../resources/media/icons/ellipsis.svg";
// Context
// Hooks
// Pages
// Resources

interface Props {
    text: string;
    date: string;
    isLast: boolean;
}

const Message: FC<Props> = ({ text, date, isLast }) => {
    return (
        <div className="grid grid-cols-[1fr,auto] gap-3 place-items-center">
            <p
                className="p-3 text-base rounded-xl rounded-tl-none bg-gradient-to-r
                            from-blue-start to-blue-end text-white-100 shadow-lg"
            >
                {text}
            </p>

            <button>
                <img src={ellipsis} alt="" />
            </button>

            {isLast && <span className="text-gray opacity-70 text-sm place-self-end">{date}</span>}
        </div>
    );
};

export default Message;
