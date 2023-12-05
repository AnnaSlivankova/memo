import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './header'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'UI/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
