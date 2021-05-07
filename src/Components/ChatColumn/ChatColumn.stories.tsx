import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import ChatColumn, { Props } from "./ChatColumn";
import { Props as ChatBoxProps } from "../ChatBox/ChatBox"
//Media
import userAvatar from "../../resources/media/icons/userAvatar.svg"
import chatAvatar1 from "../../resources/media/icons/chats/chatAvatar1.svg"
import chatHeaderAvatar from "../../resources/media/icons/chatHeaderAvatar.svg"
import chatAvatar2 from "../../resources/media/icons/chats/chatAvatar2.svg"
import sideBarHeaderAvatar from "../../resources/media/icons/sideBarHeaderAvatar.svg"

export default {
  title: "ChatColumn",
  component: ChatColumn,
  decorators: [withDesign],
  argTypes: {
  },
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <ChatColumn {...args} />;

const chatList: ChatBoxProps[] = [
  {userAvatar: userAvatar, userName: "Luy Robin", msgText: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).", lastMsgTime: new Date(2021, 4, 6, 23, 30), msgsNum: 2, active: false},
  {userAvatar: chatAvatar1, userName: "Jared Sunn", msgText: "Voice message (01:15)", lastMsgTime: new Date(2021, 4, 6, 21, 30), msgsNum: 1, active: false},
  {userAvatar: chatHeaderAvatar, userName: "Nika Jerrardo", msgText: "Cicero famously orated against his political opponent Lucius Sergius Catilina.", lastMsgTime: new Date(2021, 4, 4, 5, 30), msgsNum: 1, active: true},
  {userAvatar: chatAvatar2, userName: "David Amrosa", msgText: "Cicero famously orated against his political opponent Lucius Sergius Catilina.", lastMsgTime: new Date(2021, 4, 3, 5, 30), msgsNum: 1, active: false},
  {userAvatar: sideBarHeaderAvatar, userName: "John Doe", msgText: "Cicero famously orated against his political opponent Lucius Sergius Catilina.", lastMsgTime: new Date(2021, 4, 3, 1, 30), msgsNum: 2, active: false}
]

// Component Props
const props: Props = {
  chats: chatList
};

// Component Story Node
export const Default = Template.bind({});
Default.args = props;
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-1?node-id=786%3A192", // Figma Url
  },
};