import React from 'react'
import { IPropsButtonGoto } from '../../../@types/chunk/chunk'
import Button from '../../../Views/Button/Button'
import IconSvg from '../../../Views/Icon/IconSvg'
import { arrowRight } from '../../../Images'

const ButtonGoToUp:React.FC<IPropsButtonGoto> = ({
    onClick,
}:IPropsButtonGoto) => {
  return (<Button 
        addClass={'button__goto-up'} 
        onClick={onClick}
    >
    <IconSvg src={arrowRight} style={{width: 40, transform: 'rotate(-90deg)'}}/>
</Button>
  )
}

export default ButtonGoToUp