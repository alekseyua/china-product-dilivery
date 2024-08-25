import React from 'react'
import { IPropsMenu } from '../../@types/common';
import styles from './style/nav.module.scss'
import classNames from 'classnames';

const NavMainMenuItem:React.FC<IPropsMenu> = ({children, submenu, isMobile, isIcon}:IPropsMenu) => {
  const className=classNames({
    [styles['nav__main-menu-item']]:!isMobile,
    [styles['nav__main-menu-item-has-submenu']]: submenu && !isMobile,
    [styles['nav__main-menu-item-has-submenu--icon']]: submenu && !isMobile && isIcon,
    [styles['nav__main-menu-item-mobile']]: isMobile,
  })
  return (
    <li
      className={className}
    >{children}</li>
  )
}

export default NavMainMenuItem