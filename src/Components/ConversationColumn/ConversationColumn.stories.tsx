import React from "react";
import moment from "moment";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import ConversationColumn, { Props } from "./ConversationColumn";
import chatHeaderAvatar from "../../resources/media/icons/chatHeaderAvatar.svg";
import { imageExample } from "../MessageGroup/imageExample";

export default {
    title: "ConversationColumn",
    component: ConversationColumn,
    decorators: [withDesign],
    argTypes: {},
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-(1)?node-id=41%3A25", // Figma Url
        },
    },
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <div className="h-screen"><ConversationColumn {...args}/> </div> ;

// Component Props

const baseMessages: Array<any> = [
    {
        id: "0",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fuga?",
        date: "2021-04-18",
        userId: 0,
    },
    {
        id: "1",
        text:
            "Lorem ipsum dolor sit amet consectetur adip elit. Quas, velit. Hic veniam tempore ullam debitis repellendus! Tempore veniam eius, recusandae doloremque at ex ullam rem, consequatur quidem cum perferendis eos.",
        date: "2021-05-18",
        userId: 1,
    },
    {
        id: "2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, debitis.",
        date: "2021-05-18",
        file: {
            fileName: "imagem1.jpg",
            fileSize: "2 Gb",
            fileEncoded: imageExample,
            fileType: "Png",
        },
        userId: 1,
    },
    {
        id: "3",
        date: "2021-05-13",
        file: {
            fileName: "imagem1.jpg",
            fileSize: "2 Gb",
            fileEncoded: imageExample,
            fileType: "Png",
        },
        userId: 1,
    },
];

const props: Props = {
    avatarIcon: chatHeaderAvatar,
    name: "João",
    messages: [
        ...baseMessages,
        {
            id: "4",
            text: "a",
            date: "2021-05-18",
            userId: 2,
        },
    ],
};

// Component Story Node
export const DaylineFinal = Template.bind({});
DaylineFinal.args = props;

export const DaylineEntreMensagens = Template.bind({});
DaylineEntreMensagens.args = {
    ...props,
    messages: [
        ...props.messages,
        {
            id: "5",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi.",
            date: "2021-05-20",
            userId: 1,
        },
    ],
};

export const UltimaMensagemMenosUmDia = Template.bind({});
UltimaMensagemMenosUmDia.args = {
    ...props,
    messages: [
        ...props.messages,
        {
            id: "6",
            text:
                "Lorem ipsum ipsa id officia velit ipsam quidem soluta neque deleniti labore culpa recus. Praesentium.",
            date: "2021-05-22",
            userId: 2,
        },
    ],
};
