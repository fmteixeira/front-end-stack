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
        <div className="grid grid-rows-[1fr,auto] justify-items-center my-0 pt-10 md:pt-0 md:my-10 text-center overflow-hidden break-words">
            <div className="grid justify-items-center items-center rounded-full bg-white-100 w-12 h-12 md:w-24 md:h-24 ">
                <img className="rounded-full" src={avatarUrl} alt=""></img>
            </div>
            <div className="invisible md:visible">
                <h3 className="font-bold">{username}</h3>
            </div>
        </div>
    );
};

export default SideBarHeader;
