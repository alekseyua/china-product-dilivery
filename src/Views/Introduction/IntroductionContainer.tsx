import React from 'react'
import { IPropsViewIntroduction } from '../../@types/introduction/introduction'
import styles from './style/introduction.module.scss';


const IntroductionContainer:React.FC<IPropsViewIntroduction> = ({
    style = {},
    children,
}:IPropsViewIntroduction) => {
  return (
    <div
        className={styles['introduction__container']}
        style={style}
    >
    {children}</div>
  )
}

export default IntroductionContainer