import { Logo, PersonIcon } from '@/assets'
import Logout from '@/assets/icons/logout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenu } from '@/components/ui/drop-down'
import { DropdownMenuItem } from '@/components/ui/drop-down/drop-down-menu-item'
import { DropDownMenuSeparator } from '@/components/ui/drop-down/drop-down-menu-separator'

import s from './header.module.scss'

export const Header = () => {
  // const isLoggedIn = false
  const isLoggedIn = true

  return (
    <Card className={s.header}>
      <Logo height={36} width={157.482} />
      {isLoggedIn ? (
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
      ) : (
        <Button>Sign in</Button>
      )}
    </Card>
  )
}
