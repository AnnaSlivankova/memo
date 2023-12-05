import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

import s from './new-password.module.scss'

export const NewPassword = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Create new password
      </Typography>

      <div className={s.form}>
        <TextField label={'Password'} type={'password'} />
      </div>

      <Typography className={s.caption} variant={'body2'}>
        Create new password and we will send you further instructions to email
      </Typography>

      <Button fullWidth>Create New Password</Button>
    </Card>
  )
}
