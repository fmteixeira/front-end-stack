import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";
// Component
import ChatBox, { Props } from "./ChatBox";

import userAvatar from "../../resources/media/icons/userAvatar.svg";

export default {
    title: "ChatBox",
    component: ChatBox,
    decorators: [withDesign],
    argTypes: {},
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-(1)?node-id=131%3A1",
        },
    },
} as Meta;

// Component Story
const Template: Story<Props> = (args) => <ChatBox {...args} />;

function setChat():() => void {
    return Function;
}

// Component Props
const propsDefault: Props = {
    setChat: setChat(),
    chat: { 
        id: 5,
        name: "Laura Moreau",
        img: "https://picsum.photos/id/500/300/300",
        online: false,
        unreadMessage: 1,
        messages: [{  
            username:"Laura Moreau",
            date: "2021-05-05T22:30:00",
            message: "Good Afternoon"
            
        },
        {  
            username:"Laura Moreau",
            date: "2021-05-05T22:33:00",
            message: "Wanna go swimming"
        },
        {   
            username:"John Doe",
            date: "2021-05-05T22:36:00",
            message:"Hell yeah!"
        },
        {  
            username:"Laura Moreau",
            date: "2021-05-05T22:38:00",
            message: "Great. See you at the beach."
        },
        {  
            username:"John Doe",
            date: "2021-05-05T22:39:00",
            message:"Dont forget your sunscreen! xD"
        },
        {  
            username:"Laura Moreau",
            date: "2021-05-05T22:45:00",
            message:"Yeah fine... xD"
        }
      ]
    },
    active: false,
};

// Component Story Node
export const Default = Template.bind({});
Default.args = propsDefault;

//Component Props

const propsActive: Props = {
    setChat: setChat(),
    chat: { 
        id: 5,
        name: "Laura Moreau",
        img: "https://picsum.photos/id/500/300/300",
        online: true,
        unreadMessage: 1,
        messages: [{  
            username:"Laura Moreau",
            date: "2021-05-05T22:30:00",
            message: "Good Afternoon"
            
        },
        {  
            username:"Laura Moreau",
            date: "2021-05-05T22:33:00",
            message: "Wanna go swimming"
        },
        {   
            username:"John Doe",
            date: "2021-05-05T22:36:00",
            message:"Hell yeah!"
        },
        {  
            username:"Laura Moreau",
            date: "2021-05-05T22:38:00",
            message: "Great. See you at the beach."
        },
        {  
            username:"John Doe",
            date: "2021-05-05T22:39:00",
            message:"Dont forget your sunscreen! xD"
        },
        {  
            username:"Laura Moreau",
            date: "2021-05-05T22:45:00",
            message:"Yeah fine... xD"
        }
      ]
    },
    active: true,
};

// Component Story Node
export const Active = Template.bind({});
Active.args = propsActive;
Active.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-1?node-id=1%3A210",
    },
};

const propsNoMessage: Props = {
    setChat: setChat(),
    chat: { 
        id: 5,
        name: "Laura Moreau",
        img: "https://picsum.photos/id/500/300/300",
        online: true,
        unreadMessage: 1,
        messages: []
    },
    active: true,
};

// Component Story Node
export const NoMessage = Template.bind({});
NoMessage.args = propsNoMessage;
NoMessage.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/M0H6CQoJPQ6yNYy5q5jauC/Chat-Dashboard-1?node-id=1%3A210",
    },
};