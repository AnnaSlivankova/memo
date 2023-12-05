import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

export const Card = ({ children, className }: Props) => {
  const classNames = clsx(s.card, className)

  return <div className={classNames}>{children}</div>
}

export type Props = {
  children: ReactNode
  className?: string
}
