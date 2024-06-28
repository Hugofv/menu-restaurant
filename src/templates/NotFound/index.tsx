import React from 'react'
import { Container } from './styles'
import Typography from '~/components/Typography'
import { useTranslation } from 'react-i18next'

const NotFound: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Typography variant='h1'>404</Typography>
      <Typography variant='h2'>{t('common.notFound')}</Typography>
    </Container>
  )
}

export default NotFound
