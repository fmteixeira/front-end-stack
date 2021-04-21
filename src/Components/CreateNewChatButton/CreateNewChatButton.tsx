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
                darkMode ? "bg-dark" : "bg-gradient-to-r from-blue-start to-blue-end",
                "rounded-md",
                "px-6 py-5",
                "text-xl text-white-100",
                "grid grid-cols-[auto,1fr] gap-2 place-items-center",
            )}
        >
            <div>
                <img src={plus} alt="" className="h-6 w-6" />
            </div>
            <div>{text}</div>
        </button>
    );
};

export default CreateNewChatButton;
