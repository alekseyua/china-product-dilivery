import React from 'react'
import styles from './style/about-main.module.scss';
import { IPropsViewMainAbout } from '../../@types/about-main/about-main';


const AboutMainWrapBlock: React.FC<IPropsViewMainAbout> = ({
  style = {},
  children,
}: IPropsViewMainAbout) => {
  return (
    <div
      className={styles['about-main__wrap-block']}
      style={style}
    >
      {children}</div>
  )
}

export default AboutMainWrapBlock