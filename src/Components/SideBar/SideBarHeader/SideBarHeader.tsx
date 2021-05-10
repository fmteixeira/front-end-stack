import { FC } from "react";
// Components
// Context
// Hooks
// Pages
// Resources

export interface Props {
    username: string;
    avatarUrl: string;
}

const SideBarHeader: FC<Props> = ({ username, avatarUrl }: Props) => {
    return (
        <div className="grid justify-items-center pt-24 m-auto text-center overflow-hidden break-words">
            <div className="grid justify-items-center items-center rounded-full bg-white-100 w-12 h-12 md:w-24 md:h-24 ">
                <img className="rounded-full" src={avatarUrl} alt=""></img>
            </div>
            <div className="invisible md:visible">
                <h3 className="font-bold pt-2">{username}</h3>
            </div>
        </div>
    );
};

export default SideBarHeader;
