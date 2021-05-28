import { FC, useState } from "react";
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
    const [active, setActive] = useState(false);

    return (
        <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={clsx(
                " h-10 w-10 rounded-full grid place-items-center ",
                active
                    ? " transition duration-150 ease-in-out shadow-cirleIconShadow bg-white-100"
                    : gradient
                    ? "bg-gradient-to-r from-blue-start to-blue-end"
                    : "bg-blue",
            )}
        >
            <div>
                <img className={clsx(active ? "" : "filter brightness-0 invert")} src={icon} alt=""></img>
            </div>
        </div>
    );
};

export default CircleIcon;
