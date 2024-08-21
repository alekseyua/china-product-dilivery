import React from 'react'
import { IPropsViewIntroduction } from '../../@types/introduction/introduction'
import styles from './style/introduction.module.scss';


const IntroductionIconContainer:React.FC<IPropsViewIntroduction> = ({
    style = {},
    children,
}:IPropsViewIntroduction) => {
  return (
    <div
        className={styles['introduction__icon-container']}
        style={style}
    >
    {children}</div>
  )
}

export default IntroductionIconContainer