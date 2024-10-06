import React from 'react'
import { IProps } from '../../@types/common';
import styles from './style/nav.module.scss'
import classNames from 'classnames';
import { IBurger } from '../../@types/header/header';

const Burger: React.FC<IBurger> = ({
  onClick,
}: IBurger) => {
  const className = classNames({
    [styles['nav__burger-box']]: true,
  })
  return (
    <div
      onClick={onClick}
      className={className}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Burger