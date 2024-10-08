import React from 'react'
import { IPropsButtonGoto } from '../../../@types/chunk/chunk'
import Button from '../../../Views/Button/Button'

import Text from '../../../Views/Text/Text'
import IconSvg from '../../../Views/Icon/IconSvg'
import { arrowRight } from '../../../Images'
import { transform } from 'typescript'

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