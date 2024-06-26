import React from 'react'
import { Container } from './styles'
import Typography from '~/components/Typography'
import { useTranslation } from 'react-i18next'
import Header from '~/components/Header'

const NotFound: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <Container>
        <Typography variant='h1'>404</Typography>
        <Typography variant='h2'>{t('common.notFound')}</Typography>
      </Container>
    </>
  )
}

export default NotFound
