import React from 'react'
import { IPropsMenu } from '../../@types/common';
import styles from './style/nav.module.scss'
import classNames from 'classnames';

const NavMainSubMenuContainer: React.FC<IPropsMenu> = ({ children, isMobile }: IPropsMenu) => {
  const className = classNames({
    [styles['nav__main-sub-menu-container']]: !isMobile,
    [styles['nav__main-sub-menu-container-mobile']]: isMobile,
  })
  return (
    <ul
      className={className}
    >{children}</ul>
  )
}

export default NavMainSubMenuContainer