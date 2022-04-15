import { Meta, Story } from "@storybook/react";

import { Frame } from "./Frame";

const meta: Meta = {
  title: "Components/Frame",
  component: Frame,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Frame {...props}>{"Hello"}</Frame>;

export const Default = Template.bind({});
Default.args = {};
