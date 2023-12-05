import { forwardRef } from 'react'

import { Check } from '@/assets'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ checked, className, disabled, id, label, onChange, required }, ref) => {
    const classNames = {
      buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
      container: clsx(s.container, className),
      label: clsx(s.label, disabled && s.disabled),
      root: s.root,
    }

    return (
      <div className={s.container}>
        <LabelRadix.Root className={classNames.label} ref={ref}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              checked={checked}
              className={classNames.root}
              disabled={disabled}
              id={id}
              onCheckedChange={onChange}
              required={required}
            >
              {checked && (
                <CheckboxRadix.Indicator>
                  <Check />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </LabelRadix.Root>
      </div>
    )
  }
)

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  required?: boolean
}
