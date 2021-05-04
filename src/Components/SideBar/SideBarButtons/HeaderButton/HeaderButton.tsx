import { FC } from "react";
import clsx from "clsx";
// Components
// Context
// Media
// Hooks
// Pages
// Resources

interface Props {
    titulo: string;
    active: boolean;
    setNav: Function;
    icon: JSX.Element;
}

const HeaderButton: FC<Props> = ({ titulo, active, setNav, icon }: Props) => {
    const clickEvent = () => {
        setNav();
    };

    return (
        <div className="last:pt-72 m-auto md:m-0">
            <button
                onClick={() => clickEvent()}
                className="h-12 grid grid-cols-3 md:grid-cols-[2fr,1fr,0.5fr,auto] items-center focus:outline-none "
            >
                <div
                    className={clsx(
                        active ? "bg-blue shadow-blueShadow" : "bg-transparent",
                        " w-1 h-11 rounded-lg",
                        "transition ease-in-out duration-500",
                    )}
                ></div>
                <div className="col-start-2 col-end-3">{icon}</div>
                <h2
                    className={clsx(
                        active ? "text-blue" : "text-gray",
                        "font-bold",
                        "transition ease-in-out duration-500",
                        "md:col-start-4",
                        "hidden",
                        "md:block",
                    )}
                >
                    {titulo}
                </h2>
            </button>
        </div>
    );
};

export default HeaderButton;
