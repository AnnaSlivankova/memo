import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from '@/components/profile/profile'

const meta = {
  argTypes: {},
  component: Profile,
  tags: ['autodocs'],
  title: 'Components/Profile',
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
