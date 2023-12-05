import { LogoutIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './profile.module.scss'

export const Profile = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>

      <Typography className={s.name} variant={'h1'}>
        Ivan
      </Typography>

      <Typography className={s.email} variant={'body2'}>
        j&johnson@gmail.com
      </Typography>

      <Button variant={'secondary'}>
        <LogoutIcon /> Logout
      </Button>
    </Card>
  )
}
