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
    svg: string
}

const SvgIcon: FC<Props> = ({ index, active, svg }: Props) => {
    console.log(svg)
    return (
        <div className="transition-all ease-in-out duration-1000">
            {svg === "static/media/home.04fa869f.svg" ? <HomeSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" /> : ""}
            {svg === "static/media/chat.6230b207.svg" ? <ChatSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" /> : ""}
            {svg === "static/media/contact.46e7534d.svg" ? <ContactSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" /> : ""}
            {svg === "static/media/notification.84656871.svg" ? <NotificationSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" /> : ""}
            {svg === "static/media/calendar.67648b13.svg" ? <CalendarSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" /> : ""}
            {svg === "static/media/setting.6d5bdf40.svg" ? <SettingSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" /> : ""}
            {svg === "static/media/logout.f378d49e.svg" ? <LogoutSVG fill={active ? "#2A8BF2" : "#707C97"} className="transition-all ease-in-out duration-1000" /> : ""}
        </div>
    );
};

export default SvgIcon;
