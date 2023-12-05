import type { Meta, StoryObj } from '@storybook/react'

import { Signin } from '@/components/auth/signin/signin'

const meta = {
  argTypes: {},
  component: Signin,
  tags: ['autodocs'],
  title: 'Components/Signin',
} satisfies Meta<typeof Signin>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
