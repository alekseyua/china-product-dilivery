import React from 'react'
import { IPropsMenuContainer } from '../../@types/common';
import styles from './style/nav.module.scss'
import classNames from 'classnames';

const NavMainMenuContainer:React.FC<IPropsMenuContainer> = ({children, isMobile, isFooter}:IPropsMenuContainer) => {
  const className = classNames({
    [styles['nav__main-menu-container']]: !isMobile,
    [styles['nav__main-menu-container-mobile']]:isMobile,
    [styles['nav__main-menu-container-footer']]:isFooter
  })
  return (
    <ul
      className={className}
    >{children}</ul>
  )
}

export default NavMainMenuContainer