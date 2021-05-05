import { FC } from "react";
import clsx from "clsx";


// Components
// Context
// Hooks
// Pages

// Resources

export interface Props {
    icon: string;
    gradient: boolean;
}

const CircleIcon: FC<Props> = ({ icon, gradient }) => {
    return (
        <div
            className={clsx(
                "h-10 w-10 rounded-full",
                gradient ? "bg-gradient-to-r from-blue-start to-blue-end hover:from-white-100 hover:to-white-100 hover:" : "bg-blue hover:bg-white-100",
                "grid place-items-center shadow-circleIcon3 ",
            )}
        >
            <img src={icon} alt=""></img>
        </div>
    );
};

export default CircleIcon;
