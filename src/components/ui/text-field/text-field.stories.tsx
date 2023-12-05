import type { Meta, StoryObj } from '@storybook/react'

import { Close, Search } from '@/assets'

import { TextField } from './text-field'

const meta = {
  argTypes: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'UI/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    id: '1',
    label: 'Enter Input',
    placeholder: 'Input',
  },
}

export const InputWithoutLabel: Story = {
  args: {
    disabled: false,
    placeholder: 'Input',
  },
}

export const InputWithError: Story = {
  args: {
    disabled: false,
    errorMessage: 'some error',
    id: '1',
    label: 'Enter Input',
    placeholder: 'Input',
  },
}

export const InputWithEndIcon: Story = {
  args: {
    disabled: false,
    iconEnd: <Close />,
    id: '1',
    label: 'Enter Input',
    placeholder: 'Input',
  },
}

export const InputWithStartIcon: Story = {
  args: {
    disabled: false,
    iconStart: <Search />,
    id: '1',
    label: 'Enter Input',
    placeholder: 'Input',
  },
}

export const InputAsPassword: Story = {
  args: {
    disabled: false,
    id: '1',
    label: 'Enter Password',
    placeholder: 'Password',
    type: 'password',
  },
}
