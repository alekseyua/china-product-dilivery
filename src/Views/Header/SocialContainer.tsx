import React from 'react'
import { IPropsHeader } from '../../@types/header/header';
import styles from './styles/header.module.scss';
import classNames from 'classnames';

const  SocialContainer: React.FC<IPropsHeader> = ({children}:IPropsHeader) => {
  const className = classNames({
    'container': true,
    [styles['header__socialcontainer']]:true,
  })
  return (
    <div
        className={className}
    >{children}</div>
  )
}

export default SocialContainer