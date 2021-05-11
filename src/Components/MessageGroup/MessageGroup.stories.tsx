import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import MessageGroup, { Props } from "./MessageGroup";

import userAvatar from "../../resources/media/icons/userAvatar.svg";

export default {
    title: "MessageGroup",
    component: MessageGroup,
    decorators: [withDesign],
    argTypes: {},
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-(1)?node-id=0%3A1",
        },
    },
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <MessageGroup {...args} />;

// Component Props
const props: Props = {
    userAvatar: userAvatar,
    messages: [
        {
            id: 1,
            text:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, velit. Hic veniam tempore ullam debitis repellendus! Tempore veniam eius, recusandae doloremque at ex ullam rem, consequatur quidem cum perferendis eos.",
            date: new Date(2000, 4, 20, 12, 30),
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, debitis.",
            date: new Date(2000, 4, 20, 11, 30),
            file: {
                fileName: "imagem1.jpg",
                fileSize: "2 Gb",
                fileEncoded: "",
                fileType: "Png",
            },
        },
        {
            id: 3,
            date: new Date(2000, 4, 20, 12, 30),
            file: {
                fileName: "texto125.pdf",
                fileSize: "178 Kb",
                fileEncoded: "",
                fileType: "Pdf",
            },
        },
        {
            id: 4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi.",
            date: new Date(2021, 4, 5, 13, 30),
        },
    ],
    isActiveUser: false,
};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;

export const ActiveUser = Template.bind({});
ActiveUser.args = { ...props, isActiveUser: true };
