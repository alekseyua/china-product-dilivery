import React from 'react'
import styles from './style/about-main.module.scss';
import { IPropsViewMainAbout } from '../../@types/about-main/about-main';


const AboutMainContentContainer: React.FC<IPropsViewMainAbout> = ({
  style = {},
  children,
}: IPropsViewMainAbout) => {
  return (
    <div
      className={styles['about-main__content-container']}
      style={style}
    >
      {children}</div>
  )
}

export default AboutMainContentContainer