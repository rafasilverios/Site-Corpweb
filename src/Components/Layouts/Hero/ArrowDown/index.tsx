import React from 'react'
import { Arrow } from './styles'

const ArrowDown: React.FC = () => {
  return (
    <div>
      <a href="#sobre">
        <Arrow className="arrow down move-down"></Arrow>
      </a>
    </div>
  )
}

export default ArrowDown
