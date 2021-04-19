import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import Test, { Props } from "./Test";

export default {
    title: "Test",
    component: Test,
    decorators: [withDesign],
    argTypes: {},
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <Test {...args} />;

// Component Props
const props: Props = {};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
    design: {
        type: "figma",
        url: "missing_figma_url", // Figma Url
    },
};
