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
        <div className="bg-white-100 w-144 h-20 rounded-lg shadow-lg grid grid-cols-7 items-center">
            <img className="ml-11 w-7" src={search} alt=""></img>
            <input
                className="col-span-5 w-45 h-6 mr-10 text-xl text-gray font-medium placeholder-gray focus:outline-none "
                placeholder="Search"
                type="text"
                name="search"
            />
        </div>
    );
};

export default SearchBar;
