import React from 'react'
import { IPropsMenu } from '../../@types/common';
import styles from './style/nav.module.scss'
import classNames from 'classnames';

const NavMainSubMenuItem: React.FC<IPropsMenu> = ({ children, isMobile }: IPropsMenu) => {
  const className = classNames({
    [styles['nav__main-sub-menu-item']]: !isMobile,
    [styles['nav__main-sub-menu-item-mobile']]: isMobile,
  })
  return (
    <li
      className={className}
    >{children}</li>
  )
}

export default NavMainSubMenuItem