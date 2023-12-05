import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signin.module.scss'

const loginSchema = z.object({
  email: z.string().email({ message: 'email validation error' }),
  password: z.string().min(3, 'password validation error'),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const SigninForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Sign In
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <TextField
            {...register('email')}
            errorMessage={errors.email?.message}
            label={'Email'}
            type={'email'}
          />
          <TextField
            {...register('password')}
            errorMessage={errors.password?.message}
            label={'Password'}
            type={'password'}
          />
        </div>
        <Checkbox
          {...register('rememberMe')}
          checked={value}
          className={s.checkbox}
          label={'Remember me'}
          onChange={onChange}
        />
        <Typography as={'a'} className={s.fpwdLink} variant={'body2'}>
          Forgot Password?
        </Typography>

        <Button className={s.btn} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>

      <Typography className={s.caption} variant={'body2'}>
        Don't have an account?
      </Typography>

      <Typography as={'a'} className={s.signupLink} variant={'h3'}>
        Sign Up
      </Typography>
    </Card>
  )
}
