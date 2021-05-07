import { FC } from "react";
// Components
// Context
// Hooks
// Pages
// Resources

interface Props {
    active: boolean;
}

const ContactIcon: FC<Props> = ({ active }: Props) => {
    return (
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z"
                    fill="#231F20"
                />
                <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="3" width="14" height="18">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z"
                        fill="white"
                    />
                </mask>
                <g mask="url(#mask2)" fill="url(#paint2_linear)">
                    <rect width="24" height="24" />
                </g>
                <defs>
                    <linearGradient id="paint2_linear" x1="6" y1="4" x2="18" y2="19.5" gradientUnits="userSpaceOnUse">
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

export default ContactIcon;
