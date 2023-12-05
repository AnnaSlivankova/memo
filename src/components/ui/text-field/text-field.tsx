import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { EyeClosed, EyeOpen } from '@/assets'
import clsx from 'clsx'

import s from './text-field.module.scss'

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      disabled,
      errorMessage,
      iconEnd,
      iconStart,
      id,
      label,
      onValueChange,
      placeholder,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const classNames = {
      box: clsx(s.box),
      error: clsx(s.error),
      iconEnd: clsx(s.iconEnd),
      iconStart: clsx(s.iconStart),
      input: clsx(s.input, errorMessage && s.error, iconStart && s.hasIconStart),
      inputContainer: clsx(s.inputContainer, disabled && s.disabled),
      label: clsx(s.label, disabled && s.disabled),
    }

    const [showPassword, setShowPassword] = useState(false)

    const changePasswordVisibilityHandler = () => {
      setShowPassword(!showPassword)
    }

    const finalFieldType = ((
      type: InputHTMLAttributes<HTMLInputElement>['type'],
      showPassword: boolean
    ) => {
      if (type === 'password' && showPassword) {
        return 'text'
      }

      return type
    })(type, showPassword)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (onValueChange) {
        onValueChange(e.currentTarget.value)
      }
    }

    return (
      <div className={classNames.box}>
        {label && (
          <label className={classNames.label} htmlFor={id}>
            {label}
          </label>
        )}
        <div className={classNames.inputContainer}>
          {iconStart && <span className={classNames.iconStart}>{iconStart}</span>}
          <input
            className={classNames.input}
            disabled={disabled}
            type={finalFieldType}
            {...rest}
            id={id}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
          />
          {type === 'password' && (
            <button className={classNames.iconEnd} onClick={changePasswordVisibilityHandler}>
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </button>
          )}
          {type !== 'password' && iconEnd && (
            <button
              className={classNames.iconEnd}
              onClick={() => {
                alert(`field with id: ${id} was cleared`)
              }}
            >
              {iconEnd}
            </button>
          )}
        </div>
        {errorMessage && <span className={classNames.error}>{errorMessage}</span>}
      </div>
    )
  }
)

type TextFieldProps = {
  errorMessage?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>
