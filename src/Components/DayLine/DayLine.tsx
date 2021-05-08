import { FC } from "react";
import moment from "moment";
// Components
// Context
// Hooks
// Pages
// Resources

export interface Props {
    date: Date;
}

const DayLine: FC<Props> = ({ date }: Props) => {
    const dataDay = (): number => {
        return moment().diff(moment(date), "days");
    };

    if (dataDay() > 0) {
        return (
            <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-x-3 sm:gap-x-6">
                <div className="bg-gray h-0.5 rounded-full opacity-50"></div>
                <div>
                    <p className="text-gray font-semibold text-xs sm:text-base">
                        {dataDay() === 1 ? "1 day ago" : dataDay() + " days ago"}
                    </p>
                </div>
                <div className="bg-gray h-0.5 rounded-full opacity-50"></div>
            </div>
        );
    } else {
        return null;
    }
};

export default DayLine;
