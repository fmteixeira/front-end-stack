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
        <div className="bg-white-100 h-20 rounded-lg shadow-lg grid grid-cols-[auto,1fr] items-center">
            <div>
                <img className="ml-11 w-7" src={search} alt=""></img>
            </div>
            <input
                className="w-45 h-6 mr-10 text-xl text-gray font-medium placeholder-gray focus:outline-none "
                placeholder="Search"
                type="text"
                name="search"
            />
        </div>
    );
};

export default SearchBar;
