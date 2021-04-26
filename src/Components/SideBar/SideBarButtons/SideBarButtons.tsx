import { FC, useState } from "react";
// Components
import HeaderButton from "./HeaderButton/HeaderButton";
// Context
// Media
import Calendar from "../../../resources/media/icons/sidebar/calendar.svg";
import Chat from "../../../resources/media/icons/sidebar/chat.svg";
import Home from "../../../resources/media/icons/sidebar/home.svg";
import Notification from "../../../resources/media/icons/sidebar/notification.svg";
import Setting from "../../../resources/media/icons/sidebar/setting.svg";
import Contact from "../../../resources/media/icons/sidebar/contact.svg";
import Logout from "../../../resources/media/icons/sidebar/logout.svg";

// Hooks
// Pages
// Resources

interface Button {
    text: string;
    icon: string;
}

const buttons: Button[] = [
    { text: "HOME", icon: Home },
    { text: "CHAT", icon: Chat },
    { text: "CONTACT", icon: Contact },
    { text: "NOTIFICATIONS", icon: Notification },
    { text: "CALENDAR", icon: Calendar },
    { text: "SETTINGS", icon: Setting },
    { text: "LOG OUT", icon: Logout },
];

export interface Props {}

const SideBarButtons: FC<Props> = ({}) => {
    const [currentNav, setCurrentNav] = useState<number>(1);

    return (
        <div className="h-212">
            <div className="grid pt-16 gap-y-5">
                {buttons.map(function (button, index) {
                    return (
                        <HeaderButton
                            key={index}
                            setNav={() => setCurrentNav(index)}
                            active={currentNav === index}
                            titulo={button.text}
                            icon={button.icon}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SideBarButtons;
