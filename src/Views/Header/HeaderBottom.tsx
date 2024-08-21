import React from 'react'
import { IPropsHeader } from '../../@types/header/header';
import styles from './styles/header.module.scss';
import classNames from 'classnames';

const  HeaderBottom: React.FC<IPropsHeader> = ({children, isFixed}:IPropsHeader) => {
  const className = classNames({
    'container': true,
    [styles['header__bottom']]:true,
    [styles['header__bottom-sticky']]:isFixed
  })

  return (
    <div
        className={className}
    >{children}</div>
  )
}

export default HeaderBottom