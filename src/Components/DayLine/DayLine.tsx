import { FC } from "react";
import moment from "moment";
// Components
// Context
// Hooks
// Pages
// Resources

export interface Props {
    date: string;
}

const DayLine: FC<Props> = ({ date }: Props) => {
    if (moment().diff(moment(date), "days") > 0) {
        return (
            <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-x-3 sm:gap-x-6">
                <div className="bg-gray h-0.5 rounded-full opacity-50"></div>
                <div>
                    <p className="text-gray font-semibold text-xs sm:text-base">{moment(date).fromNow()}</p>
                </div>
                <div className="bg-gray h-0.5 rounded-full opacity-50"></div>
            </div>
        );
    } else {
        return null;
    }
};

export default DayLine;
