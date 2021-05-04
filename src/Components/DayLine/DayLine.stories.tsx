import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import DayLine, { Props } from "./DayLine";

export default {
  title: "DayLine",
  component: DayLine,
  decorators: [withDesign],
  argTypes: {
  },
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <DayLine {...args} />;

// Component Props
const props: Props = {
};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
  design: {
    type: "figma",
    url:
      "missing_figma_url", // Figma Url
  },
};