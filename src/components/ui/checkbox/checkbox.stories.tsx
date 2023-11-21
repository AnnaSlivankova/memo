import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import { Checkbox } from "./checkbox";

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ["autodocs"],
  title: "Components/Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    id: "1",
    label: "My checkbox",
  },

  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
};
