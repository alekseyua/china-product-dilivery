import React from 'react'
import { IPropsHeader } from '../../@types/header/header';
import styles from './styles/header.module.scss';
import classNames from 'classnames';

const  SocialBox: React.FC<IPropsHeader> = ({children}:IPropsHeader) => {
  const className = classNames({
    [styles['header__socialbox']]:true,
  })
  return (
    <div
        className={className}
    >{children}</div>
  )
}

export default SocialBox