import React from 'react'
import { IPropsButtonTransparent } from '../../../@types/chunk/chunk'
import Button from '../../../Views/Button/Button'
import { line } from '../../../Images'
import Text from '../../../Views/Text/Text'

const ButtonTransporent:React.FC<IPropsButtonTransparent> = ({
    name,
    href,
    onClick
}:IPropsButtonTransparent) => {
  return (<Button 
        // addClass={'button__transporent'} 
        href={href} 
        iconSvgLeft={line} 
        iconSvgRight={line} 
        btnTransparent
        onClick={onClick}
    >
    <Text>{name}</Text>
</Button>
  )
}

export default ButtonTransporent