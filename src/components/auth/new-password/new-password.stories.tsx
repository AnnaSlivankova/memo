import type { Meta, StoryObj } from '@storybook/react'

import { NewPassword } from '@/components/auth/new-password/new-password'

const meta = {
  argTypes: {},
  component: NewPassword,
  tags: ['autodocs'],
  title: 'Components/NewPassword',
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
