import type { Meta, StoryObj } from '@storybook/react'

import { PasswordRecovery } from '@/components/auth/password-recovery/password-recovery'

const meta = {
  argTypes: {},
  component: PasswordRecovery,
  tags: ['autodocs'],
  title: 'Components/PasswordRecovery',
} satisfies Meta<typeof PasswordRecovery>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
