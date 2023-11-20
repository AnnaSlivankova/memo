import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./typography";

const meta = {
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: [
        "body1",
        "body2",
        "caption",
        "h1",
        "h2",
        "h3",
        "large",
        "link1",
        "link2",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
    },
  },
  component: Typography,
  tags: ["autodocs"],
  title: "Components/Typography",
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body1: Story = {
  args: {
    as: "body",
    children: "Body1",
    variant: "body1",
  },
};

export const Body2: Story = {
  args: {
    as: "body",
    children: "Body2",
    variant: "body2",
  },
};

export const Caption: Story = {
  args: {
    children: "Caption",
    variant: "caption",
  },
};

export const H1: Story = {
  args: {
    as: "h1",
    children: "h1",
    variant: "h1",
  },
};

export const H2: Story = {
  args: {
    as: "h2",
    children: "h2",
    variant: "h2",
  },
};

export const H3: Story = {
  args: {
    as: "h3",
    children: "h3",
    variant: "h3",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    variant: "large",
  },
};

export const Link1: Story = {
  args: {
    as: "a",
    children: "Link1",
    variant: "link1",
  },
};

export const Link2: Story = {
  args: {
    as: "a",
    children: "Link2",
    variant: "link2",
  },
};

export const Overline: Story = {
  args: {
    children: "Overline",
    variant: "overline",
  },
};

export const Subtitle1: Story = {
  args: {
    children: "Subtitle1",
    variant: "subtitle1",
  },
};

export const Subtitle2: Story = {
  args: {
    children: "Subtitle2",
    variant: "subtitle2",
  },
};
