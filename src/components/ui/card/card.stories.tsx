import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/components/ui/typography";

import { Card } from "./card";

const meta = {
  argTypes: {},
  component: Card,
  tags: ["autodocs"],
  title: "Components/Card",
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardWithChildren: Story = {
  args: {
    children: (
      <>
        <Typography variant={"large"}>Card</Typography>
      </>
    ),
  },
};
