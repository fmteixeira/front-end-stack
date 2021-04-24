import { FC } from "react";
import clsx from "clsx";
// Components
import SvgIcon from "./SvgIcon/SvgIcon";
// Context
// Media
// Hooks
// Pages
// Resources

interface Props {
    titulo: string;
    active: boolean;
    setNav: Function;
    chave: number;
}

const HeaderButton: FC<Props> = ({ titulo, active, setNav, chave }: Props) => {
    const clickEvent = () => {
        setNav();
    };

    return (
        <div className="last:pt-72">
            <button
                onClick={() => clickEvent()}
                className="h-12 grid grid-cols-4 grid-cols-[2fr,1fr,0.5fr,auto] items-center focus:outline-none"
            >
                <div
                    className={clsx(
                        active ? "bg-blue" : "bg-transparent",
                        " w-1 h-11 rounded-lg",
                        "transition ease-out duration-500"
                    )}
                ></div>
                <div>
                    <SvgIcon active={active} index={chave} />
                </div>
                <h2
                    className={clsx(
                        active ? "text-blue" : "text-gray",
                        "font-bold",
                        "transition ease-out duration-500", "col-start-4"
                    )}
                >
                    {titulo}
                </h2>
            </button>
        </div>
    );
};

export default HeaderButton;
