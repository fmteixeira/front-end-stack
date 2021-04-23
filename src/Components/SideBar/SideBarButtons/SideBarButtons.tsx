import { FC, useState } from "react";
import clsx from "clsx";
// Components
// Context
// Media
import calendar from "../../../resources/media/icons/sidebar/calendar.svg";
import calendar_active from "../../../resources/media/icons/sidebar/calendar_active.svg";
import chat from "../../../resources/media/icons/sidebar/chat.svg";
import chat_active from "../../../resources/media/icons/sidebar/chat_active.svg";
import contact from "../../../resources/media/icons/sidebar/contact.svg";
import contact_active from "../../../resources/media/icons/sidebar/contact_active.svg";
import home from "../../../resources/media/icons/sidebar/home.svg";
import home_active from "../../../resources/media/icons/sidebar/home_active.svg";
import notification from "../../../resources/media/icons/sidebar/notification.svg";
import notification_active from "../../../resources/media/icons/sidebar/notification_active.svg";
import setting from "../../../resources/media/icons/sidebar/setting.svg";
import setting_active from "../../../resources/media/icons/sidebar/setting_active.svg";
import logout from "../../../resources/media/icons/sidebar/logout.svg";
// Hooks
// Pages
// Resources

export interface Props {}

const SideBarButtons: FC<Props> = ({}) => {
    const [currentNav, setCurrentNav] = useState("Chat");

    return (
        <div className="grid grid-cols-1 gap-y-7 pt-16">
            <div
                onClick={() => {
                    setCurrentNav("Home");
                }}
                className="h-12 grid grid-cols-3 grid-cols-[3fr,3.2fr,16fr] items-center"
            >
                <div className={clsx(currentNav === "Home" ? "bg-blue w-1 h-11 rounded-lg" : "")}></div>
                <div>
                    <img src={currentNav === "Home" ? home_active : home} alt="" />
                </div>
                <h2 className={clsx(currentNav === "Home" ? "text-blue" : "text-gray", "font-bold")}>HOME</h2>
            </div>

            <div
                onClick={() => {
                    setCurrentNav("Chat");
                }}
                className="h-12 grid grid-cols-3 grid-cols-[3fr,3.2fr,16fr] items-center"
            >
                <div className={clsx(currentNav === "Chat" ? "bg-blue w-1 h-11 rounded-lg" : "")}></div>
                <div>
                    <img src={currentNav === "Chat" ? chat_active : chat} alt="" />
                </div>
                <h2 className={clsx(currentNav === "Chat" ? "text-blue" : "text-gray", "font-bold")}>CHAT</h2>
            </div>

            <div
                onClick={() => {
                    setCurrentNav("Contact");
                }}
                className="h-12 grid grid-cols-3 grid-cols-[3fr,3.2fr,16fr] items-center"
            >
                <div className={clsx(currentNav === "Contact" ? "bg-blue w-1 h-11 rounded-lg" : "")}></div>
                <div>
                    <img src={currentNav === "Contact" ? contact_active : contact} alt="" />
                </div>
                <h2 className={clsx(currentNav === "Contact" ? "text-blue" : "text-gray", "font-bold")}>CONTACT</h2>
            </div>

            <div
                onClick={() => {
                    setCurrentNav("Notifications");
                }}
                className="h-12 grid grid-cols-3 grid-cols-[3fr,3.2fr,16fr] items-center"
            >
                <div className={clsx(currentNav === "Notifications" ? "bg-blue w-1 h-11 rounded-lg" : "")}></div>
                <div>
                    <img src={currentNav === "Notifications" ? notification_active : notification} alt="" />
                </div>
                <h2 className={clsx(currentNav === "Notifications" ? "text-blue" : "text-gray", "font-bold")}>
                    NOTIFICATIONS
                </h2>
            </div>

            <div
                onClick={() => {
                    setCurrentNav("Calendar");
                }}
                className="h-12 grid grid-cols-3 grid-cols-[3fr,3.2fr,16fr] items-center"
            >
                <div className={clsx(currentNav === "Calendar" ? "bg-blue w-1 h-11 rounded-lg" : "")}></div>
                <div>
                    <img src={currentNav === "Calendar" ? calendar_active : calendar} alt="" />
                </div>
                <h2 className={clsx(currentNav === "Calendar" ? "text-blue" : "text-gray", "font-bold")}>CALENDAR</h2>
            </div>

            <div
                onClick={() => {
                    setCurrentNav("Settings");
                }}
                className="h-12 grid grid-cols-3 grid-cols-[3fr,3.2fr,16fr] items-center"
            >
                <div className={clsx(currentNav === "Settings" ? "bg-blue w-1 h-11 rounded-lg" : "")}></div>
                <div>
                    <img src={currentNav === "Settings" ? setting_active : setting} alt="" />
                </div>
                <h2 className={clsx(currentNav === "Settings" ? "text-blue" : "text-gray", "font-bold")}>SETTINGS</h2>
            </div>

            <div className="h-12 grid grid-cols-3 grid-cols-[3fr,3.2fr,16fr] mt-60 items-center">
                <div className="w-1 h-11 rounded-lg"></div>
                <div>
                    <img src={logout} alt="" />
                </div>
                <h2 className="text-gray font-bold">LOG OUT</h2>
            </div>
        </div>
    );
};

export default SideBarButtons;
