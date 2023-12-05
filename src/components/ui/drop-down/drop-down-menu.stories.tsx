import type { Meta, StoryObj } from '@storybook/react'

import { Delete, Edit, Learn, PersonIcon } from '@/assets'
import Logout from '@/assets/icons/logout'
import { DropdownMenu } from '@/components/ui/drop-down/drop-down-menu'
import { DropdownMenuItem } from '@/components/ui/drop-down/drop-down-menu-item'
import { DropDownMenuSeparator } from '@/components/ui/drop-down/drop-down-menu-separator'

const meta = {
  argTypes: {},
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'UI/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
  render: args => {
    return (
      <DropdownMenu align={'end'}>
        <DropdownMenuItem>
          <Learn />
          Learn
        </DropdownMenuItem>
        <DropDownMenuSeparator />
        <DropdownMenuItem>
          <Edit />
          Edit
        </DropdownMenuItem>
        <DropDownMenuSeparator />
        <DropdownMenuItem>
          <Delete />
          Delete
        </DropdownMenuItem>
      </DropdownMenu>
    )
  },
}

export const Profile: Story = {
  args: {},
  render: args => {
    return (
      <DropdownMenu
        align={'end'}
        trigger={
          <img
            alt={'user-ava'}
            src={'https://biographe.ru/wp-content/uploads/2021/03/2343232-3.jpg'}
            style={{
              borderRadius: '50%',
              cursor: 'pointer',
              height: '36px',
              objectFit: 'cover',
              width: '36px',
            }}
          />
        }
      >
        <DropdownMenuItem>
          <>
            <img
              alt={'user-ava'}
              src={'https://biographe.ru/wp-content/uploads/2021/03/2343232-3.jpg'}
              style={{
                borderRadius: '50%',
                cursor: 'pointer',
                height: '36px',
                objectFit: 'cover',
                width: '36px',
              }}
            />
            <div
              style={{
                color: 'var(--color-dark-100)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  color: 'var(--color-light-100)',
                  fontSize: '14px',
                  fontWeight: '700',
                  lineHeight: '24px',
                }}
              >
                Ivan
              </span>
              j&johnson@gmail.com
            </div>
          </>
        </DropdownMenuItem>
        <DropDownMenuSeparator />
        <DropdownMenuItem>
          <PersonIcon /> My profile
        </DropdownMenuItem>
        <DropDownMenuSeparator />
        <DropdownMenuItem>
          <Logout /> Sign out
        </DropdownMenuItem>
      </DropdownMenu>
    )
  },
}
