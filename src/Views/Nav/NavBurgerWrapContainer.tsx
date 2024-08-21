import React from 'react'
import { IProps } from '../../@types/common';
import styles from './style/nav.module.scss'
import classNames from 'classnames';
import { INavBurger } from '../../@types/header/header';

const NavBurgerWrapContainer:React.FC<INavBurger> = ({children, isOpen}:INavBurger) => {
  const className=classNames({
    [styles['nav__burger-container']]:true,
    [styles['nav__burger-container-active']]:isOpen,
  })
  return (
    <div
      className={className}
    >
      {children}
    </div>
  )
}

export default NavBurgerWrapContainer