import React from 'react'
import Image from '../Image/Image'
import { imageFone } from '../../Images'

const Background: React.FC = () => {
  return (
    <Image src={imageFone} addClass='image__background' />
  )
}

export default Background