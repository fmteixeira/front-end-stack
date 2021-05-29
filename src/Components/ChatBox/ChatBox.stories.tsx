import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import ChatBox, { Props } from "./ChatBox";

export default {
    title: "ChatBox",
    component: ChatBox,
    decorators: [withDesign],
    argTypes: {},
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-(1)?node-id=131%3A1",
        },
    },
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <ChatBox {...args} />;

function setChat(): () => void {
    return Function;
}

// Component Props
const propsDefault: Props = {
    setChat: setChat(),
    chat: {
        id: 5,
        name: "Laura Moreau",
        img: "https://picsum.photos/id/500/300/300",
        online: "2021-05-08T14:40:00",
        unreadMessageCounter: 1,
        messages: [
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
        ],
    },
    active: false,
};

// Component Story Node
export const Default = Template.bind({});
Default.args = propsDefault;

//Component Props

const propsActive: Props = {
    setChat: setChat(),
    chat: {
        id: 5,
        name: "Laura Moreau",
        img: "https://picsum.photos/id/500/300/300",
        online: "2021-05-08T14:40:00",
        unreadMessageCounter: 1,
        messages: [
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
        ],
    },
    active: true,
};

// Component Story Node
export const Active = Template.bind({});
Active.args = propsActive;
Active.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-1?node-id=1%3A210",
    },
};

const propsNoMessage: Props = {
    setChat: setChat(),
    chat: {
        id: 5,
        name: "Laura Moreau",
        img: "https://picsum.photos/id/500/300/300",
        unreadMessageCounter: 1,
        messages: [],
    },
    active: true,
};

// Component Story Node
export const NoMessage = Template.bind({});
NoMessage.args = propsNoMessage;
NoMessage.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-1?node-id=1%3A210",
    },
};
