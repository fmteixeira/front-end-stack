import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import SideBarButtons, { Props } from "./SideBarButtons";

export default {
    title: "SideBarButtons",
    component: SideBarButtons,
    decorators: [withDesign],
    argTypes: {},
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <SideBarButtons {...args} />;

// Component Props
const props: Props = {};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-(1)?node-id=253%3A1", // Figma Url
    },
};
