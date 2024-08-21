import React from 'react'
import { IPropsHeader } from '../../@types/header/header';
import classNames from 'classnames';

import styles from './styles/header.module.scss';

const  SocialContainerContacts: React.FC<IPropsHeader> = ({children}:IPropsHeader) => {
  const className = classNames({
    [styles['header__socialcontainer-contact']]:true,
  })
  return (
    <div
        className={className}
    >{children}</div>
  )
}

export default SocialContainerContacts