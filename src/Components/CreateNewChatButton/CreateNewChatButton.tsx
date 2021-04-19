import React from "react";
import clsx from "clsx";
// Components
// Media
import plus from "../../assets/svg/plus.svg";
// Context
// Hooks
// Pages
// Resources

export interface Props {
    text: string;
    darkMode?: boolean;
}

const CreateNewChatButton: React.FC<Props> = ({ text, darkMode = false }: Props) => {
    return (
        <button
            className={clsx(
                darkMode ? "bg-dark" : "bg-gradient-to-r from-blue-start to-blue-end",
                "rounded-md",
                "px-6 py-5",
                "text-xl text-white-100",
                "grid grid-cols-[auto,1fr] gap-2 place-items-center",
            )}
        >
            <div>
                <img src={plus} alt="" className="h-[25px] w-[25px]" />
            </div>
            <div>{text}</div>
        </button>
    );
};

export default CreateNewChatButton;
