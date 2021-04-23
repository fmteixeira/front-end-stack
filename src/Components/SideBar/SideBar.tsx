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
}

const SideBar: FC<Props> = ({ username }: Props) => {
    return (
        <div className="bg-white-100 w-72">
            <SideBarHeader username={username} />
            <SideBarButtons />
        </div>
    );
};

export default SideBar;
