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
    mensagens: [
        { id: 1, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, in." },
        {
            id: 2,
            text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quaerat quidem fuga corrupti tempora itaque unde? Voluptatem doloribus quibusdam a consectetur distinctio. Eaque molestias aperiam culpa repudiandae, blanditiis voluptatem dolores!",
        },
        { id: 3, text: "Lorem ipsum dolor sit amet." },
    ],
    lastMsgTime: 100,
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
