import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import ChatBox, { Props } from "./ChatBox";

import userAvatar from "../../resources/media/icons/userAvatar.svg";

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

// Component Props
const propsDefault: Props = {
    userAvatar: userAvatar,
    userName: "Luy Robin",
    lastMsgTime: 2,
    msgText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas velit doloribus porro quae dolores consequatur in modi quidem. Natus vel ad dolores laborum fugiat asperiores modi, neque pariatur aperiam possimus. Delectus, excepturi? Natus, odio quidem, nam, dolore numquam laboriosam at voluptatibus eos earum blanditiis aliquam consequatur facere ut! Esse!",
    msgsNum: 3,
    active: false,
    isUserOnline: true,
};

// Component Story Node
export const Default = Template.bind({});
Default.args = propsDefault;

//Component Props

// Component Story Node
export const Active = Template.bind({});
Active.args = { ...propsDefault, active: true };
Active.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-1?node-id=1%3A210",
    },
};
