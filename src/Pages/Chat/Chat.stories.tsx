import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
//Media
import sideBarAvatar from "../../resources/media/icons/sideBarHeaderAvatar.svg";
// Component
import Chat, { Props } from "./Chat";
// Data
import data from "../../resources/data/data.json";

export default {
    title: "Chat",
    component: Chat,
    decorators: [withDesign],
    argTypes: {},
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <Chat {...args} />;

// Component Props
const props: Props = {
    username: "John Doe",
    avatarUrl: sideBarAvatar,
    chats: data
};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
    design: {
        type: "figma",
        url: "missing_figma_url", // Figma Url
    },
};
