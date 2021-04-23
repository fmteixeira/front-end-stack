import { FC } from "react";
// Components
// Context
// Media
import sideBarAvatar from "../../../resources/media/icons/sideBarHeaderAvatar.svg";
// Hooks
// Pages
// Resources

export interface Props {
    username: string;
}

const SideBarHeader: FC<Props> = ({ username }: Props) => {
    return (
        <div className="grid justify-items-center pt-24">
            <div className="bg-white-100 w-24 h-24 grid justify-items-center items-center rounded-full">
                <img className="rounded-full" src={sideBarAvatar} alt=""></img>
            </div>
            <div>
                <h3 className="pt-2">{username}</h3>
            </div>
        </div>
    );
};

export default SideBarHeader;
