import { Meta, Story } from "@storybook/react";

import { Actions } from "./Actions";

const meta: Meta = {
  title: "Components/Actions",
  component: Actions,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Actions {...props}>{"Hello"}</Actions>;

export const Default = Template.bind({});
Default.args = {};
