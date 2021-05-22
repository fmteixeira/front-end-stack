import { FC, useState, useRef, useEffect } from "react";
import MessageGroup from "../MessageGroup/MessageGroup";
import ChatInput from "../ChatInput/ChatInput";
import ChatHeader from "../ChatHeader/ChatHeader";
import DayLine from "../DayLine/DayLine";
import {
    Message as MessageTextInterface,
    MessageFile as MessageFileInterface,
} from "../../resources/typing/interfaces";
import clsx from "clsx";

import moment from "moment";
import { v4 as uuidv4 } from "uuid";
// Components
import useUser from "../../Context/userContext";
// Context
// Hooks
// Pages
import userAvatar from "../../resources/media/icons/userAvatar.svg";
// Resources

export interface Props {
    avatarIcon: string;
    name: string;
    messages: Array<MessageTextInterface | MessageFileInterface>;
}

export interface ScrollProps {}

const AlwaysScrollToBottom: FC<ScrollProps> = () => {
    const scrollRef = useRef<any>();
    useEffect(() => scrollRef.current.scrollIntoView());
    return <div ref={scrollRef} />;
};

const ConversationColumn: FC<Props> = ({ avatarIcon, name, messages }) => {
    const groupMessages = (messages: Array<MessageTextInterface | MessageFileInterface>) => {
        return messages.reduce(
            (
                acc: Array<Array<MessageTextInterface | MessageFileInterface>>,
                value: MessageTextInterface | MessageFileInterface,
            ) => {
                if (acc.length && acc[acc.length - 1][0].userId === value.userId) {
                    acc[acc.length - 1].push(value);
                } else {
                    acc.push([value]);
                }
                return acc;
            },
            [],
        );
    };

    const [currentMessages, setCurrentMessages] = useState<Array<Array<MessageTextInterface | MessageFileInterface>>>(
        groupMessages(messages),
    );

    const daysBetweenDates = (date1: string, date2: string): number => {
        return moment(date1).diff(moment(date2), "days");
    };

    const loggedUserId = useUser((state: any) => state.userId);

    const sendMessage = (text: string) => {
        if (currentMessages[currentMessages.length - 1][0].userId === loggedUserId) {
            setCurrentMessages([
                ...currentMessages.slice(0, -1),
                [
                    ...currentMessages[currentMessages.length - 1],
                    { userId: loggedUserId, text: text, id: uuidv4(), date: moment().toString() },
                ],
            ]);
        } else {
            setCurrentMessages([
                ...currentMessages,
                [{ userId: loggedUserId, text: text, id: uuidv4(), date: moment().toString() }],
            ]);
        }
    };

    return (
        <div className="bg-white-100 h-full w-full text-sm md:text-base">
            <div className="grid grid-rows-[auto,1fr,auto] h-full relative">
                <ChatHeader avatarIcon={avatarIcon} name={name} />

                <div className="w-full overflow-y-auto bg-white-100 grid gap-y-2 pt-2 pl-2 pr-2 ">
                    {currentMessages.map((messageGroup, idx) => {
                        return (
                            <div
                                key={idx}
                                className={clsx(
                                    "grid",
                                    messageGroup[0].userId === loggedUserId
                                        ? "grid-cols-[1fr,4fr]"
                                        : "grid-cols-[4fr,1fr]",
                                )}
                            >
                                <div className={clsx(messageGroup[0].userId === loggedUserId && "col-start-2")}>
                                    <MessageGroup
                                        key={idx}
                                        userAvatar={userAvatar}
                                        messages={messageGroup}
                                        isActiveUser={messageGroup[0].userId === loggedUserId}
                                    />
                                </div>

                                {currentMessages.length - idx === 2 &&
                                    messageGroup[0].userId !== loggedUserId &&
                                    daysBetweenDates(
                                        currentMessages[idx + 1][0].date,
                                        messageGroup[messageGroup.length - 1].date,
                                    ) >= 1 && (
                                        <div className="col-span-full">
                                            <DayLine date={messageGroup[messageGroup.length - 1].date} />
                                        </div>
                                    )}

                                <AlwaysScrollToBottom />
                            </div>
                        );
                    })}
                </div>

                <div className="w-full bg-white-100 ">
                    <ChatInput handleSubmit={(text) => sendMessage(text)} />
                </div>
            </div>
        </div>
    );
};

export default ConversationColumn;
