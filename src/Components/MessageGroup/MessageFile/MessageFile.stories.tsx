import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import MessageFile, { Props } from "./MessageFile";
import { imageExample } from "../imageExample";

export default {
    title: "MessageFile",
    component: MessageFile,
    decorators: [withDesign],
    argTypes: {},
    parameters: {
        design: {
            type: "figma",
            url: "missing_figma_url", // Figma Url
        },
    },
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <MessageFile {...args} />;

// Component Props
const props: Props = {
    date: "2018-06-03",
    isLast: true,
    fileName: "nameExample.png",
    fileSize: "125Kb",
    fileType: "Png",
    fileEncoded: imageExample,
    isActiveUser: false,
};

// Component Story Node
export const NoTextNoActiveUser = Template.bind({});
NoTextNoActiveUser.args = props;

export const NoTextActiveUser = Template.bind({});
NoTextActiveUser.args = { ...props, isActiveUser: true };

export const TextNoActiveUser = Template.bind({});
TextNoActiveUser.args = { ...props, text: "Here's the image." };

export const TextActiveUser = Template.bind({});
TextActiveUser.args = { ...TextNoActiveUser.args, isActiveUser: true };
