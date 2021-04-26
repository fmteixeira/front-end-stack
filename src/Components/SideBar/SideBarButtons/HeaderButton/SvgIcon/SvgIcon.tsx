import { FC } from "react";
// Components
// Context
// Media
import HomeIcon from "../../../../../resources/media/icons/sidebar/HomeIcon/HomeIcon";
import ChatIcon from "../../../../../resources/media/icons/sidebar/ChatIcon/ChatIcon";
import ContactIcon from "../../../../../resources/media/icons/sidebar/ContactIcon/ContactIcon";
import NotificationIcon from "../../../../../resources/media/icons/sidebar/NotificationIcon/NotificationIcon";
import CalendarIcon from "../../../../../resources/media/icons/sidebar/CalendarIcon/CalendarIcon";
import SettingIcon from "../../../../../resources/media/icons/sidebar/SettingIcon/SettingIcon";
import LogoutIcon from "../../../../../resources/media/icons/sidebar/LogoutIcon/LogoutIcon";

// Hooks
// Pages
// Resources

interface Props {
    active: boolean;
    svg: string;
}

const SvgIcon: FC<Props> = ({ active, svg }: Props) => {
    return (
        <div className="transition-all ease-in-out duration-1000">
            {svg === "static/media/home.04fa869f.svg" ? <HomeIcon active={active} /> : ""}
            {svg === "static/media/chat.6230b207.svg" ? <ChatIcon active={active} /> : ""}
            {svg === "static/media/contact.46e7534d.svg" ? <ContactIcon active={active} /> : ""}
            {svg === "static/media/notification.84656871.svg" ? <NotificationIcon active={active} /> : ""}
            {svg === "static/media/calendar.67648b13.svg" ? <CalendarIcon active={active} /> : ""}
            {svg === "static/media/setting.6d5bdf40.svg" ? <SettingIcon active={active} /> : ""}
            {svg === "static/media/logout.f378d49e.svg" ? <LogoutIcon active={active} /> : ""}
        </div>
    );
};

export default SvgIcon;
