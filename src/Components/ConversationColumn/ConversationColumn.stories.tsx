import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import ConversationColumn, { Props } from "./ConversationColumn";
import chatHeaderAvatar from "../../resources/media/icons/chatHeaderAvatar.svg";
import {imageExample} from "../MessageGroup/imageExample"

export default {
  title: "ConversationColumn",
  component: ConversationColumn,
  decorators: [withDesign],
  argTypes: {
  },
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <ConversationColumn {...args} />;

// Component Props
const props: Props = {
  avatarIcon: chatHeaderAvatar,
  name: "João",
  messages: [
    {
        id: 1,
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, velit. Hic veniam tempore ullam debitis repellendus! Tempore veniam eius, recusandae doloremque at ex ullam rem, consequatur quidem cum perferendis eos.",
        date: new Date(2000, 4, 20, 12, 30),
        userId:1
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, debitis.",
        date: new Date(2000, 4, 20, 11, 30),
        file: {
            fileName: "imagem1.jpg",
            fileSize: "2 Gb",
            fileEncoded: imageExample,
            fileType: "Png",
        },
        userId:1
    },    
    {
      id: 3,
      date: new Date(2000, 4, 20, 12, 30),
      file: {
          fileName: "imagem1.jpg",
          fileSize: "2 Gb",
          fileEncoded: imageExample,
          fileType: "Png",
      },
      userId:1

  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi.",
    date: new Date(2021, 4, 5, 13, 30),
    userId:2

},
{
  id: 5,
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi.",
  date: new Date(2021, 5, 5, 13, 30),
  userId:1

},
  ]
}

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