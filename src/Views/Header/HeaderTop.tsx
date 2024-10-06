import React from 'react'
import { IPropsHeader } from '../../@types/header/header';
import styles from './styles/header.module.scss';

const HeaderTop: React.FC<IPropsHeader> = ({ children }: IPropsHeader) => {
  return (
    <div
      className={styles['header-top']}
    >{children}</div>
  )
}

export default HeaderTop