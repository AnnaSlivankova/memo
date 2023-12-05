import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './radio-group.module.scss'

const RadioGroupRoot = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={clsx(s.root, className)} {...props} ref={ref} />
})

RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item className={s.item} ref={ref} {...props}>
      <RadioGroupPrimitive.Indicator>
        <div className={s.indicator}></div>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  (props, ref) => {
    const { className, options, ...rest } = props

    const classNames = {
      buttonWrapper: clsx(s.buttonWrapper, rest.disabled && s.disabled),
    }

    return (
      <RadioGroupRoot {...rest} ref={ref}>
        {options.map(option => (
          <div className={clsx(s.container)} key={option.value}>
            <div className={clsx(classNames.buttonWrapper)}>
              <RadioGroupItem id={option.value} value={option.value} />
            </div>
            <Typography as={'label'} htmlFor={option.value} id={option.value} variant={'body2'}>
              {option.label}
            </Typography>
          </div>
        ))}
      </RadioGroupRoot>
    )
  }
)

export { RadioGroup, RadioGroupItem, RadioGroupRoot }

type RadioGroupProps = Omit<
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
  'children'
> & {
  options: Option[]
}

type Option = {
  label: string
  value: string
}
