import React from 'react';
import {IPropsHeader} from '../../@types/header/header'
import styles from './styles/header.module.scss';

const HeaderSection:React.FC<IPropsHeader> = ({children}:IPropsHeader) => {
  return (
    <header
      className={styles['header__th-header']}
    >{children}</header>
  )
}

export default HeaderSection