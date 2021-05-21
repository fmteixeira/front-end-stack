import { FC } from "react";
// Components
// Context
// Hooks
// Pages
import moment from "moment";
// Resources

interface Props {
    date: Date;
}

const MessageLastDate: FC<Props> = ({ date }) => {
    return <span className="text-gray opacity-70 text-xs md:text-sm place-self-end">{moment(date).fromNow()}</span>;
};

export default MessageLastDate;
