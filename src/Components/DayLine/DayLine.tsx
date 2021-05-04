import { FC } from "react";
// Components
// Context
// Hooks
// Pages
// Resources

export interface Props {
    date: Date;
}

const DayLine: FC<Props> = ({ date }: Props) => {
    const dataDay = () => {
        return Math.floor((new Date().getTime() - date.getTime()) / (1000 * 3600 * 24));
    };

    dataDay();
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
};

export default DayLine;
