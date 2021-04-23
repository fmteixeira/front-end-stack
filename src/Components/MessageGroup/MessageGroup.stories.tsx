import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import MessageGroup, { Props } from "./MessageGroup";

import userAvatar from "../../resources/media/icons/userAvatar.svg";

export default {
    title: "MessageGroup",
    component: MessageGroup,
    decorators: [withDesign],
    argTypes: {},
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <MessageGroup {...args} />;

// Component Props
const props: Props = {
    userAvatar: userAvatar,
    messages: [
        {
            id: 1,
            text:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, velit. Hic veniam tempore ullam debitis repellendus! Tempore veniam eius, recusandae doloremque at ex ullam rem, consequatur quidem cum perferendis eos.",
            date: "21 days ago",
        },

        {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi.",
            date: "19 days ago",
        },
    ],
};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-(1)?node-id=0%3A1",
    },
};
