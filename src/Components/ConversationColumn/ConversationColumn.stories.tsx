import React from "react";
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
const Template: Story<Props> = (args) => <ConversationColumn {...args} />;

// Component Props

const baseMessages: Array<any> = [
    {
        id: 0,
        text: "TEM DE APARECER PORBAIXO DISTO",
        date: new Date(1998, 4, 20, 12, 30),
        userId: 0,
    },
    {
        id: 1,
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, velit. Hic veniam tempore ullam debitis repellendus! Tempore veniam eius, recusandae doloremque at ex ullam rem, consequatur quidem cum perferendis eos.",
        date: new Date(2000, 4, 20, 12, 30),
        userId: 1,
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, debitis.",
        date: new Date(2000, 4, 20, 11, 30),
        file: {
            fileName: "imagem1.jpg",
            fileSize: "2 Gb",
            fileEncoded: imageExample,
            fileType: "Png",
        },
        userId: 1,
    },
    {
        id: 3,
        date: new Date(2000, 4, 20, 12, 30),
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
            id: 4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi.",
            date: new Date(2021, 4, 11, 13, 30),
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
            id: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi.",
            date: new Date(2021, 4, 14, 13, 30),
            userId: 1,
        },
    ],
};
