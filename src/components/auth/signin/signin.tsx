import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

import s from './signin.module.scss'

export const Signin = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Sign In
      </Typography>
      <div className={s.form}>
        <TextField label={'Email'} type={'email'} />
        <TextField label={'Password'} type={'password'} />
      </div>

      <Checkbox checked className={s.checkbox} label={'Remember me'} onChange={() => {}} />

      <Typography as={'a'} className={s.fpwdLink} variant={'body2'}>
        Forgot Password?
      </Typography>

      <Button className={s.btn} fullWidth>
        Sign In
      </Button>

      <Typography className={s.caption} variant={'body2'}>
        Don't have an account?
      </Typography>

      <Typography as={'a'} className={s.signupLink} variant={'h3'}>
        Sign Up
      </Typography>
    </Card>
  )
}
