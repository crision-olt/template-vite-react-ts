import { Meta, Story } from "@storybook/react";

import { Body } from "./Body";

const meta: Meta = {
  title: "Components/Body",
  component: Body,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Body {...props}>{"Hello"}</Body>;

export const Default = Template.bind({});
Default.args = {};
