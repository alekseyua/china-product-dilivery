import React from 'react'
import { IPropsMenu } from '../../@types/common';
import styles from './style/nav.module.scss'
import classNames from 'classnames';

const NavMainSubMenuWrap: React.FC<IPropsMenu> = ({ children, isMobile }: IPropsMenu) => {
  const className = classNames({
    [styles['nav__main-sub-menu-wrap']]: !isMobile,
    [styles['nav__main-sub-menu-wrap-mobile']]: isMobile,
  })
  return (
    <div
      className={className}
    >{children}</div>
  )
}

export default NavMainSubMenuWrap