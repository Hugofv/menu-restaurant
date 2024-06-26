import React, { Dispatch, useMemo } from 'react'
import { RoundedButton, Wrapper } from './styles'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useTheme } from 'styled-components'
import Typography from '../Typography'

interface ICounter {
  size?: 'medium' | 'small'
  value?: number
  minValue?: number
  setValue?: Dispatch<React.SetStateAction<number>>
}

const Counter: React.FC<ICounter> = ({
  size = 'medium',
  minValue,
  value = 1,
  setValue
}) => {
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

  const handleMinus = () => {
    setValue?.((prev) => prev - 1)
  }

  const handlePlus = () => {
    setValue?.((prev) => prev + 1)
  }

  const checkMinValueAvailable = useMemo(() => {
    if (minValue) return value <= minValue
  }, [minValue, value])

  return (
    <Wrapper>
      <RoundedButton
        disabled={checkMinValueAvailable}
        size={elementsSize[size].button}
        onClick={handleMinus}
      >
        <FaMinus size={elementsSize[size].icon} color={theme.color.light} />
      </RoundedButton>
      <Typography variant='h1'>{value}</Typography>
      <RoundedButton size={elementsSize[size].button} onClick={handlePlus}>
        <FaPlus size={elementsSize[size].icon} color={theme.color.light} />
      </RoundedButton>
    </Wrapper>
  )
}

export default Counter
