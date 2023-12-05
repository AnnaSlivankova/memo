import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

import s from './password-recovery.module.scss'

export const PasswordRecovery = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Forgot your password?
      </Typography>
      <div className={s.form}>
        <TextField label={'Email'} type={'email'} />
      </div>

      <Typography className={s.captionOne} variant={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>

      <Button className={s.btn} fullWidth>
        Send Instructions
      </Button>

      <Typography className={s.captionTwo} variant={'body2'}>
        Did you remember your password?
      </Typography>

      <Typography as={'a'} className={s.signinLink} variant={'h3'}>
        Try logging in
      </Typography>
    </Card>
  )
}
