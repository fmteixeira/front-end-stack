import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Media
import chatHeaderAvatar from "../../resources/media/icons/chatHeaderAvatar.svg";
// Component
import ChatHeader, { Props } from "./ChatHeader";

export default {
    title: "ChatHeader",
    component: ChatHeader,
    decorators: [withDesign],
    argTypes: {},
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <ChatHeader {...args} />;

const SemDataTemplate: Story<Props> = (args) => <ChatHeader {...args} />;

// Component Props
const props: Props = {
    avatarIcon: chatHeaderAvatar,
    nome: "Nika Jerrardo",
    date: new Date(2021, 4, 4, 14, 30),
};

const semDataProps: Props = {
    avatarIcon: chatHeaderAvatar,
    nome: "Nika Jerrardo",
};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-(1)?node-id=616%3A651", // Figma Url
    },
};

export const SemData = SemDataTemplate.bind({});
SemData.args = semDataProps;
SemData.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-(1)?node-id=616%3A651", // Figma Url
    },
};
