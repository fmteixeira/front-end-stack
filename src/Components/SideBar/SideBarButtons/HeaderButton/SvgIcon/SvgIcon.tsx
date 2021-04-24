import { FC } from "react";
// Components
// Context
// Media
import { ReactComponent as CalendarSVG } from "../../../../../resources/media/icons/sidebar/calendar.svg";
import { ReactComponent as ChatSVG } from "../../../../../resources/media/icons/sidebar/chat.svg";
import { ReactComponent as HomeSVG } from "../../../../../resources/media/icons/sidebar/home.svg";
import { ReactComponent as NotificationSVG } from "../../../../../resources/media/icons/sidebar/notification.svg";
import { ReactComponent as SettingSVG } from "../../../../../resources/media/icons/sidebar/setting.svg";
import { ReactComponent as ContactSVG } from "../../../../../resources/media/icons/sidebar/contact.svg";
import { ReactComponent as LogoutSVG } from "../../../../../resources/media/icons/sidebar/logout.svg";
// Hooks
// Pages
// Resources

interface Props {
    index: number;
    active: boolean;
}

const SvgIcon: FC<Props> = ({ index, active }: Props) => {
    const iconsSVG = [
        <HomeSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" />,
        <ChatSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" />,
        <ContactSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" />,
        <NotificationSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" />,
        <CalendarSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" />,
        <SettingSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" />,
        <LogoutSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" />,
    ];

    return <div>{iconsSVG[index]}</div>;
};

export default SvgIcon;
