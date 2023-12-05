import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

import s from './signup.module.scss'

export const Signup = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Sign Up
      </Typography>
      <div className={s.form}>
        <TextField label={'Email'} type={'email'} />
        <TextField label={'Password'} type={'password'} />
        <TextField label={'Confirm Password'} type={'password'} />
      </div>

      <Button className={s.btn} fullWidth>
        Sign Up
      </Button>

      <Typography className={s.caption} variant={'body2'}>
        Already have an account?
      </Typography>

      <Typography as={'a'} className={s.signinLink} variant={'h3'}>
        Sign In
      </Typography>
    </Card>
  )
}
