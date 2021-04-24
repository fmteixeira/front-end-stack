import { FC, useState } from "react";
// Components
import HeaderButton from "./HeaderButton/HeaderButton";

// Context
// Hooks
// Pages
// Resources

const buttons = ["HOME", "CHAT", "CONTACT", "NOTIFICATIONS", "CALENDAR", "SETTINGS", "LOG OUT"];

export interface Props {}

const SideBarButtons: FC<Props> = ({}) => {
    const [currentNav, setCurrentNav] = useState<number>(1);

    return (
        <div className="h-212">
            <div className="grid pt-16 gap-y-5">
                {buttons.map(function (name, index) {
                    return (
                        <HeaderButton
                            key={index}
                            chave={index}
                            setNav={() => setCurrentNav(index)}
                            active={currentNav === index}
                            titulo={name}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SideBarButtons;
