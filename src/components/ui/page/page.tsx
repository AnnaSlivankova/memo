import { FC, ReactNode } from 'react'

import clsx from 'clsx'

import s from './page.module.scss'

export const Page: FC<Props> = ({ children, className }) => {
  const classNames = clsx(s.root, className)

  return <div className={classNames}>{children}</div>
}

interface Props {
  children?: ReactNode
  className?: string
}
