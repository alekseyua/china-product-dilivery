import React from 'react'
import { IPropsViewIntroduction } from '../../@types/introduction/introduction'
import styles from './style/introduction.module.scss';


const IntroductionGrid:React.FC<IPropsViewIntroduction> = ({
    style = {},
    children,
}:IPropsViewIntroduction) => {
  return (
    <div
        className={styles['introduction__container-grid']}
        style={style}
    >
    {children}</div>
  )
}

export default IntroductionGrid