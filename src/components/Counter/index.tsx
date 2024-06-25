import React from 'react'
import { RoundedButton, Wrapper } from './styles'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useTheme } from 'styled-components'
import Typography from '../Typography'

interface ICounter {
  size?: 'medium' | 'small'
}

const Counter: React.FC<ICounter> = ({ size = 'medium' }) => {
  const theme = useTheme()

  const elementsSize = {
    small: {
      button: '1rem',
      icon: '.5rem'
    },
    medium: {
      button: '2rem',
      icon: '1rem'
    }
  }

  return (
    <Wrapper>
      <RoundedButton size={elementsSize[size].button}>
        <FaMinus size={elementsSize[size].icon} color={theme.color.light} />
      </RoundedButton>
      <Typography variant='h1'>1</Typography>
      <RoundedButton size={elementsSize[size].button}>
        <FaPlus size={elementsSize[size].icon} color={theme.color.light} />
      </RoundedButton>
    </Wrapper>
  )
}

export default Counter
