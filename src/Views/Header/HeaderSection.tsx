import React from 'react';
import {IPropsHeader} from '../../@types/header/header'
import classNames from 'classnames';

import styles from './styles/header.module.scss';

const HeaderSection:React.FC<IPropsHeader> = ({children, isBurger}:IPropsHeader) => {
  const className = classNames({
    [styles['header__th-header']]: true,
    [styles['header__th-header--mobile']]: isBurger
})
  return (
    <header
      className={className}
    >{children}</header>
  )
}

export default HeaderSection