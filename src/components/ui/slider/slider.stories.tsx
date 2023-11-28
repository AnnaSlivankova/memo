import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./slider";

const meta = {
  argTypes: {},
  component: Slider,
  tags: ["autodocs"],
  title: "Components/Slider",
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    max: 100,
    min: 0,
    onChangeValues: (min: number, max: number) => {
      // alert(`values from slider min: ${min} max: ${max}`);
      console.log(`values from slider min: ${min} max: ${max}`);
    },
  },
};
