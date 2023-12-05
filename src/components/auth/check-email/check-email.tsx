import Email from '@/assets/icons/email'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Check Email
      </Typography>

      <Email className={s.icon} />

      <Typography className={s.caption} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>

      <Button fullWidth>Send Instructions</Button>
    </Card>
  )
}
