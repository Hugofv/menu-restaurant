import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { Header, Wrapper, WrapperContent, WrapperIcon } from './styles'
import Typography from '../Typography'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

interface ICollapseProps {
  title: string
  defaultOpen?: boolean
  children: ReactNode
}

const Collapse: React.FC<ICollapseProps> = ({
  title,
  defaultOpen = true,
  children
}) => {
  const [contentHeight, setContentHeight] = useState('0rem')
  const [open, setOpen] = useState(defaultOpen)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const childHeightRaw = contentRef.current?.clientHeight

    setContentHeight(`${childHeightRaw || 0}rem`)
  }, [open])

  const handleToggleOpen = () => {
    setOpen(!open)
  }

  return (
    <Wrapper id={title}>
      <Header>
        <Typography variant='h1'>{title}</Typography>
        <WrapperIcon onClick={handleToggleOpen}>
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </WrapperIcon>
      </Header>

      <WrapperContent
        style={{
          maxHeight: open ? contentHeight : 0
        }}
      >
        <div ref={contentRef}>{children}</div>
      </WrapperContent>
    </Wrapper>
  )
}

export default Collapse
