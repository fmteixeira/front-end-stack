import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import ChatColumn, { Props } from "./ChatColumn";
// Data
import data from "../../resources/data/data.json";

export default {
    title: "ChatColumn",
    component: ChatColumn,
    decorators: [withDesign],
    argTypes: {},
} as Meta;

// Component Story
const Template: Story<Props> = (args) => (
    <div className="h-236">
        <ChatColumn {...args} />
    </div>
);

// Component Props
const props: Props = {
    chats: data,
};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-1?node-id=786%3A192", // Figma Url
    },
};
