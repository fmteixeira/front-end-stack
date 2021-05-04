import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import DayLine, { Props } from "./DayLine";

export default {
    title: "DayLine",
    component: DayLine,
    decorators: [withDesign],
    argTypes: {},
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <DayLine {...args} />;

// Component Props
const props: Props = {
    date: new Date(2021, 3, 2),
};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-(1)?node-id=616%3A657", // Figma Url
    },
};
