import { FC } from "react";
// Components
// Context
// Hooks
// Pages
// Resources

interface Props {
    active: boolean;
}

const LogoutIcon: FC<Props> = ({ active }: Props) => {
    return (
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 12C13 12.553 12.552 13 12 13C11.448 13 11 12.553 11 12V2C11 1.447 11.448 1 12 1C12.552 1 13 1.447 13 2V12ZM15.2389 3.5413C15.4919 3.0503 16.0959 2.8593 16.5859 3.1113C19.9249 4.8383 21.9999 8.2433 21.9999 12.0003C21.9999 17.5133 17.5139 22.0003 11.9999 22.0003C6.48588 22.0003 1.99988 17.5133 1.99988 12.0003C1.99988 8.2433 4.07488 4.8383 7.41488 3.1113C7.90388 2.8583 8.50788 3.0493 8.76188 3.5413C9.01588 4.0313 8.82288 4.6343 8.33288 4.8883C5.65988 6.2693 3.99988 8.9943 3.99988 12.0003C3.99988 16.4113 7.58888 20.0003 11.9999 20.0003C16.4109 20.0003 19.9999 16.4113 19.9999 12.0003C19.9999 8.9943 18.3399 6.2693 15.6679 4.8883C15.1769 4.6343 14.9849 4.0313 15.2389 3.5413Z"
                    fill="#231F20"
                />
                <mask id="mask6" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="21" height="22">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 12C13 12.553 12.552 13 12 13C11.448 13 11 12.553 11 12V2C11 1.447 11.448 1 12 1C12.552 1 13 1.447 13 2V12ZM15.2389 3.5413C15.4919 3.0503 16.0959 2.8593 16.5859 3.1113C19.9249 4.8383 21.9999 8.2433 21.9999 12.0003C21.9999 17.5133 17.5139 22.0003 11.9999 22.0003C6.48588 22.0003 1.99988 17.5133 1.99988 12.0003C1.99988 8.2433 4.07488 4.8383 7.41488 3.1113C7.90388 2.8583 8.50788 3.0493 8.76188 3.5413C9.01588 4.0313 8.82288 4.6343 8.33288 4.8883C5.65988 6.2693 3.99988 8.9943 3.99988 12.0003C3.99988 16.4113 7.58888 20.0003 11.9999 20.0003C16.4109 20.0003 19.9999 16.4113 19.9999 12.0003C19.9999 8.9943 18.3399 6.2693 15.6679 4.8883C15.1769 4.6343 14.9849 4.0313 15.2389 3.5413Z"
                        fill="white"
                    />
                </mask>
                <g mask="url(#mask6)" fill="url(#paint6_linear)">
                    <rect width="24" height="24" />
                </g>
                <defs>
                    <linearGradient id="paint6_linear" x1="6" y1="4" x2="18" y2="19.5" gradientUnits="userSpaceOnUse">
                        <stop
                            stopColor={active ? "#7CB8F7" : "#707C97"}
                            className="transition-all ease-in-out duration-1000"
                        />
                        <stop
                            offset="0.934101"
                            stopColor={active ? "#2A8BF2" : "#707C97"}
                            className="transition-all ease-in-out duration-1000"
                        />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default LogoutIcon;
