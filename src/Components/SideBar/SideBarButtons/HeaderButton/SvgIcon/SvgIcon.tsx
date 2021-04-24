import { FC } from "react";
import clsx from "clsx";
// Components
// Context
// Media
import Calendar from "../../../../../resources/media/icons/sidebar/calendar.svg";
import Chat from "../../../../../resources/media/icons/sidebar/chat.svg";
import Home from "../../../../../resources/media/icons/sidebar/home.svg";
import Notification from "../../../../../resources/media/icons/sidebar/notification.svg";
import Setting from "../../../../../resources/media/icons/sidebar/setting.svg";
import Contact from "../../../../../resources/media/icons/sidebar/contact.svg";
import Logout from "../../../../../resources/media/icons/sidebar/logout.svg";
import Calendar_Active from "../../../../../resources/media/icons/sidebar/calendar_active.svg";
import Chat_Active from "../../../../../resources/media/icons/sidebar/chat_active.svg";
import Home_Active from "../../../../../resources/media/icons/sidebar/home_active.svg";
import Notification_Active from "../../../../../resources/media/icons/sidebar/notification_active.svg";
import Setting_Active from "../../../../../resources/media/icons/sidebar/setting_active.svg";
import Contact_Active from "../../../../../resources/media/icons/sidebar/contact_active.svg";
import Logout_Active from "../../../../../resources/media/icons/sidebar/logout_active.svg";
// Hooks
// Pages
// Resources

const icons: { [index: number]: string } = {
    0: Home,
    1: Chat,
    2: Contact,
    3: Notification,
    4: Calendar,
    5: Setting,
    6: Logout,
    7: Home_Active,
    8: Chat_Active,
    9: Contact_Active,
    10: Notification_Active,
    11: Calendar_Active,
    12: Setting_Active,
    13: Logout_Active,
};

interface Props {
    index: number;
    active: boolean;
}

const SvgIcon: FC<Props> = ({ index, active }: Props) => {
    console.log(Calendar);
    return (
        <div>
            <img className="absolute" src={icons[index + 7]} alt="" />
            <img
                className={clsx(
                    active ? "opacity-0" : "opacity-100",
                    "transition-all duration-700",
                    "ease-linear",
                    "relative",
                )}
                src={icons[index]}
                alt=""
            />
        </div>
    );
};

export default SvgIcon;
