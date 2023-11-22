import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import { RadioGroup } from "./radio-group";

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ["autodocs"],
  title: "Components/RadioGroup",
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    options: [
      { label: "Option one", value: 1 },
      { label: "Option two", value: 2 },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState("");
    const callback = (value: any) => {
      setValue(value);
    };

    return (
      <>
        <RadioGroup {...args} onValueChange={callback} />
        <span>Selected value: {value}</span>
      </>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { label: "Option one", value: "option one" },
      { label: "Option two", value: "option two" },
    ],
  },
};
