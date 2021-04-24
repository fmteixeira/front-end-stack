import { FC } from "react";
// Components
import SideBarHeader from "./SideBarHeader/SideBarHeader";
import SideBarButtons from "./SideBarButtons/SideBarButtons";
// Context
// Hooks
// Pages
// Resources

export interface Props {
    username: string;
    avatarUrl: string;
}

const SideBar: FC<Props> = ({ username, avatarUrl }: Props) => {
    return (
        <div className="bg-white-100 w-72 grid shadow-2xl">
            <SideBarHeader username={username} avatarUrl={avatarUrl} />
            <SideBarButtons />
        </div>
    );
};

export default SideBar;
