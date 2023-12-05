import { FC, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from '@/components/ui/drop-down/drop-down-menu.module.scss'

export const DropdownMenuItem: FC<Props> = ({ children }) => {
  return <DropdownMenuRadix.Item className={s.DropdownMenuItem}>{children}</DropdownMenuRadix.Item>
}

type Props = {
  children?: ReactNode
}
