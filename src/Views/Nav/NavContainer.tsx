import React from 'react'
import { IProps } from '../../@types/common';
import styles from './style/nav.module.scss'

const NavContainer = ({children}:IProps) => {
  return (
    <nav className={styles['nav__container']}>{children}</nav>
  )
}

export default NavContainer