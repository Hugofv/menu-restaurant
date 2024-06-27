import React, { useMemo } from 'react'
import { RoundedButton, Wrapper } from './styles'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useTheme } from 'styled-components'
import Typography from '../Typography'

interface ICounter {
  size?: 'medium' | 'small'
  value?: number
  minValue?: number
  setValue?: (value: number) => void
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
      button: '1.3rem',
      icon: '1rem',
      text: '16px',
      gap: '.6rem'
    },
    medium: {
      button: '2rem',
      icon: '1rem',
      text: '24px',
      gap: '1rem'
    }
  }

  const handleMinus = () => {
    setValue?.((value -= 1))
  }

  const handlePlus = () => {
    setValue?.((value += 1))
  }

  const checkMinValueAvailable = useMemo(() => {
    if (minValue) return value <= minValue
  }, [minValue, value])

  return (
    <Wrapper data-testid='WrapperCounter' style={{ gap: elementsSize[size].gap }}>
      <RoundedButton
        disabled={checkMinValueAvailable}
        size={elementsSize[size].button}
        onClick={handleMinus}
        data-testid='ButtonMinus'
      >
        <FaMinus size={elementsSize[size].icon} color={theme.color.light} />
      </RoundedButton>
      <Typography fontSize={elementsSize[size].text} variant='h1'>
        {value}
      </Typography>
      <RoundedButton
        size={elementsSize[size].button}
        onClick={handlePlus}
        data-testid='ButtonPlus'
      >
        <FaPlus size={elementsSize[size].icon} color={theme.color.light} />
      </RoundedButton>
    </Wrapper>
  )
}

export default Counter
