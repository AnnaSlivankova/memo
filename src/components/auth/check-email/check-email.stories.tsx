import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from '@/components/auth/check-email/check-email'

const meta = {
  argTypes: {},
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Components/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
