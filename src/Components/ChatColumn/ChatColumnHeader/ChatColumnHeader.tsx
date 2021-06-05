import { FC } from "react";
// Components
import CreateNewChatButton from "../../CreateNewChatButton/CreateNewChatButton";
import SearchBar from "../../SearchBar/SearchBar";
// Context
// Hooks
// Pages
// Resources

interface Props {
    setSearch: (searchVaue: string) => void;
}

const ChatColumnHeader: FC<Props> = ({ setSearch }: Props) => {
    const searchEvent = (searchValue: string) => {
        setSearch(searchValue);
    };

    return (
        <div className="p-3">
            <div className="grid grid-cols-2 py-5">
                <div className="font-semibold text-sm md:text-base text-gray mt-auto">
                    <p>Recent Chats</p>
                </div>
                <div className="ml-auto">
                    <CreateNewChatButton text="Create New Chat" />
                </div>
            </div>
            <div className="py-2 md:py-5">
                <SearchBar setSearch={searchEvent} />
            </div>
        </div>
    );
};

export default ChatColumnHeader;
