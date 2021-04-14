import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import CreateNewChatButton, { Props } from "./CreateNewChatButton";

export default {
  title: "CreateNewChatButton",
  component: CreateNewChatButton,
  decorators: [withDesign],
  argTypes: {},
} as Meta;

/**
 * Story: Component
 */
const Template: Story<Props> = (args) => <CreateNewChatButton {...args} />;

/**
 * Story: Parameters
 */

const props: Props = {
  text: "Create New Chat",
};

export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-(1)?node-id=24%3A78",
  },
};
