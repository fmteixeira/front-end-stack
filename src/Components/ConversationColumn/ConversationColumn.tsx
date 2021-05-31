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
import { UserContext } from "../../Context/userContext";
// Resources

export interface Props {
    avatarIcon: string;
    name: string;
    online?: string;
    messages: Array<MessageTextInterface | MessageFileInterface>;
    setChatNull: Function;
}

const ConversationColumn: FC<Props> = ({ avatarIcon, name, messages, online, setChatNull }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (null !== scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    });

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

    const [currentName, setCurrentName] = useState<string>(name);

    const daysBetweenDates = (date1: string, date2: string): number => {
        return moment(date1).diff(moment(date2), "days");
    };

    const loggedUserId = useUser((state: UserContext) => state.userId);

    const sendMessage = (text: string) => {
        if (currentMessages.length > 0 && currentMessages[currentMessages.length - 1][0].userId === loggedUserId) {
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

    const updateConversationColumn = () => {
        setCurrentName(name);
        setCurrentMessages(groupMessages(messages));
    };

    return (
        <div className="bg-white-100 h-screen w-full text-sm md:text-base">
            <div className="grid grid-rows-[auto,1fr,auto] h-full relative">
                <ChatHeader avatarIcon={avatarIcon} name={name} date={online} setChatNull={setChatNull} />

                <div ref={scrollRef} className="w-full overflow-y-auto bg-white-100 grid gap-y-2 pt-2 pl-2 pr-2 ">
                    {currentName !== name && updateConversationColumn()}
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
                                        userAvatar={avatarIcon}
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
