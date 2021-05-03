import { FC } from "react";
// Components
// Context
// Media
import pin from "../../resources/media/icons/pin.svg";
import verticalDots from "../../resources/media/icons/verticalDots.svg";
// Hooks
// Pages
// Resources

export interface Props {
    avatarIcon: string;
    nome: string;
}

const ChatHeader: FC<Props> = ({ avatarIcon, nome }: Props) => {
    return (
        <div className="bg-white-100 rounded-t-md w-full h-24 grid grid-cols-[auto,1fr,auto,auto] gap-x-4 pl-4 pr-4 sm:pl-12 sm:pr-8 items-center">
            <div className="ml-auto w-10 h-10">
                <img className="rounded-full" alt="" src={avatarIcon} />
            </div>
            <div>
                <h2 className="font-bold text-sm sm:text-base">{nome}</h2>
                <p className="text-blue text-xs font-semibold">last online 5 hours ago</p>
            </div>
            <div>
                <button className="bg-white-100 w-8 h-8 sm:w-11 sm:h-11 rounded-full shadow-buttonShadow grid items-center justify-items-center focus:outline-none">
                    <img className="transform scale-75 sm:scale-100" alt="" src={pin} />
                </button>
            </div>
            <div>
                <button className="bg-white-100 w-8 h-8 sm:w-11 sm:h-11 rounded-full shadow-buttonShadow grid items-center justify-items-center focus:outline-none">
                    <img className="transform scale-75 sm:scale-100" alt="" src={verticalDots} />
                </button>
            </div>
        </div>
    );
};

export default ChatHeader;
