import { Meta, Story } from "@storybook/react";

import { Head } from "./Head";

const meta: Meta = {
  title: "Components/Head",
  component: Head,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Head {...props}>{"Hello"}</Head>;

export const Default = Template.bind({});
Default.args = {};
