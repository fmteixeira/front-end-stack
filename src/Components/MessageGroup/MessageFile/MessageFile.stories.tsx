import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import MessageFile, { Props } from "./MessageFile";

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
    date: new Date(2012, 12, 18),
    isLast: true,
    fileName: "texto1.txt",
    fileSize: "125Kb",
    isActiveUser: false,
};

// Component Story Node
export const NoTextNoActiveUser = Template.bind({});
NoTextNoActiveUser.args = props;

export const TextNoActiveUser = Template.bind({});
TextNoActiveUser.args = { ...props, text: "Aquie está o texto1," };

export const NoTextActiveUser = Template.bind({});
NoTextActiveUser.args = { ...props, isActiveUser: true };

export const TextActiveUser = Template.bind({});
TextActiveUser.args = { ...props, text: "Aqui está o texto1.", isActiveUser: true };
