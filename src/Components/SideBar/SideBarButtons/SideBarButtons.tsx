import { FC, useState } from "react";
// Components
import HeaderButton from "./HeaderButton/HeaderButton";
// Context
// Media
import HomeIcon from "../../../resources/media/icons/sidebar/HomeIcon/HomeIcon";
import ChatIcon from "../../../resources/media/icons/sidebar/ChatIcon/ChatIcon";
import ContactIcon from "../../../resources/media/icons/sidebar/ContactIcon/ContactIcon";
import NotificationIcon from "../../../resources/media/icons/sidebar/NotificationIcon/NotificationIcon";
import CalendarIcon from "../../../resources/media/icons/sidebar/CalendarIcon/CalendarIcon";
import SettingIcon from "../../../resources/media/icons/sidebar/SettingIcon/SettingIcon";
import LogoutIcon from "../../../resources/media/icons/sidebar/LogoutIcon/LogoutIcon";
// Hooks
// Pages
// Resources

export interface Props {}

const SideBarButtons: FC<Props> = ({}) => {
    const [currentNav, setCurrentNav] = useState<number>(1);

    return (
        <div className="h-full">
            <div className="h-full grid gap-y-5 grid-rows-[auto,auto,auto,auto,auto,auto,1fr]">
                <HeaderButton
                    setNav={() => setCurrentNav(0)}
                    active={currentNav === 0}
                    titulo={"HOME"}
                    icon={<HomeIcon active={currentNav === 0} />}
                />
                <HeaderButton
                    setNav={() => setCurrentNav(1)}
                    active={currentNav === 1}
                    titulo={"CHAT"}
                    icon={<ChatIcon active={currentNav === 1} />}
                />
                <HeaderButton
                    setNav={() => setCurrentNav(2)}
                    active={currentNav === 2}
                    titulo={"CONTACT"}
                    icon={<ContactIcon active={currentNav === 2} />}
                />
                <HeaderButton
                    setNav={() => setCurrentNav(3)}
                    active={currentNav === 3}
                    titulo={"NOTIFICATIONS"}
                    icon={<NotificationIcon active={currentNav === 3} />}
                />
                <HeaderButton
                    setNav={() => setCurrentNav(4)}
                    active={currentNav === 4}
                    titulo={"CALENDAR"}
                    icon={<CalendarIcon active={currentNav === 4} />}
                />
                <HeaderButton
                    setNav={() => setCurrentNav(5)}
                    active={currentNav === 5}
                    titulo={"SETTINGS"}
                    icon={<SettingIcon active={currentNav === 5} />}
                />
                <HeaderButton
                    setNav={() => setCurrentNav(6)}
                    active={currentNav === 6}
                    titulo={"LOG OUT"}
                    icon={<LogoutIcon active={currentNav === 6} />}
                />
            </div>
        </div>
    );
};

export default SideBarButtons;
