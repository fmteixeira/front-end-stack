import { FC } from "react";
// Components
// Context
// Media
import search from "../../resources/media/icons/search.svg";
// Hooks
// Pages
// Resources

export interface Props {}

const SearchBar: FC<Props> = ({}) => {
    return (
        <div className="bg-white-100 pl-11 h-20 rounded-lg shadow-lg grid grid-cols-[auto,1fr] items-center">
            <div className="w-7">
                <img src={search} alt=""></img>
            </div>
            <input
                className="h-6 w-full pr-10 text-xl text-gray font-medium placeholder-gray focus:outline-none "
                placeholder="Search"
                type="search"
                name="search"
            />
        </div>
    );
};

export default SearchBar;
