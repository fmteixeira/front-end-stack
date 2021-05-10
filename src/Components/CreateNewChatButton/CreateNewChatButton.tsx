import { FC } from "react";
import clsx from "clsx";
// Components
// Media
import plus from "../../resources/media/icons/plus.svg";
// Context
// Hooks
// Pages
// Resources

export interface Props {
    text: string;
}

const CreateNewChatButton: FC<Props> = ({ text }: Props) => {
    // FIXME: Remove this, keep gradient styles
    const darkMode: boolean = false;

    return (
        <button
            className={clsx(
                darkMode ? "bg-dark" : "bg-gradient-to-r from-blue-start to-blue-end hover:shadow-createChatButton",
                "rounded-md",
                "px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5",
                "outline-none focus:outline-none",
                "text-sm sm:text-base md:text-xl text-white-100",
                "grid grid-cols-[auto,1fr] gap-2 place-items-center",
                "group transition-all ease-in-out duration-500",
            )}
        >
            <div className="transform group-hover:rotate-180 transition-all ease-in-out duration-500">
                <img src={plus} alt="" className="h-6 md:w-6" />
            </div>
            <div>{text}</div>
        </button>
    );
};

export default CreateNewChatButton;
