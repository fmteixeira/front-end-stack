import { FC } from "react";
import clsx from "clsx";
import moment from "moment";
// Components
// Context
// Media
import { ReactComponent as PinComponent } from "../../resources/media/icons/pin.svg";
import { ReactComponent as VerticalDots } from "../../resources/media/icons/verticalDots.svg";
// Hooks
// Pages
// Resources

export interface Props {
    avatarIcon: string;
    nome: string;
    date?: Date | undefined;
}

const ChatHeader: FC<Props> = ({ avatarIcon, nome, date }: Props) => {
    const onlineTime = (): string => {
        if (date) {
            return moment() >= moment(date) ? "last online " + moment(date).fromNow() : "Offline";
        } else {
            return "Online";
        }
    };

    onlineTime();

    return (
        <div className="bg-white-100 rounded-t-md w-full h-24 grid grid-cols-[auto,1fr,auto,auto] gap-x-4 pl-4 pr-4 sm:pl-12 sm:pr-8 items-center">
            <div className="ml-auto w-10 h-10 relative">
                <img className="rounded-full absolute" alt="" src={avatarIcon} />
                <div
                    className={clsx(
                        date ? "invisible" : "visible",
                        "absolute",
                        "w-3 h-3",
                        "rounded-full",
                        "bg-white-100",
                        "mt-7 ml-7",
                        "flex justify-center items-center",
                    )}
                >
                    <span className="w-2 h-2 absolute bg-green-600 rounded-full"></span>
                </div>
            </div>
            <div>
                <h2 className="font-bold text-sm sm:text-base">{nome}</h2>
                <p className="text-blue text-xs font-semibold">{onlineTime()}</p>
            </div>
            <div>
                <button className="bg-gradient-to-br from-white-100 to-white-100 hover:from-blue-start hover:to-blue-end group w-8 h-8 sm:w-11 sm:h-11 rounded-full shadow-buttonShadow grid items-center justify-items-center outline-none focus:outline-none">
                    <PinComponent className="transform scale-75 sm:scale-100 fill-current text-gray group-hover:text-white-100" />
                </button>
            </div>
            <div>
                <button className="bg-gradient-to-br from-white-100 to-white-100 hover:from-blue-start hover:to-blue-end group w-8 h-8 sm:w-11 sm:h-11 rounded-full shadow-buttonShadow grid items-center justify-items-center outline-none focus:outline-none">
                    <VerticalDots className="transform scale-75 sm:scale-100 fill-current text-gray group-hover:text-white-100" />
                </button>
            </div>
        </div>
    );
};

export default ChatHeader;
