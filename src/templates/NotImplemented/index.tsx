import React from 'react'
import { Container } from './styles'
import Typography from '~/components/Typography'
import { useTranslation } from 'react-i18next'

const NotImplemented: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Typography variant='h1'>501</Typography>
      <Typography variant='h2'>{t('common.notImplemented')}</Typography>
    </Container>
  )
}

export default NotImplemented
