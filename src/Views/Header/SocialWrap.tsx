import React from 'react'
import { IPropsHeader } from '../../@types/header/header';
import styles from './styles/header.module.scss';
import classNames from 'classnames';

const SocialWrap: React.FC<IPropsHeader> = ({ children, style }: IPropsHeader) => {
  const className = classNames({
    [styles['header__socialwrap']]: true,
  })
  return (
    <div
      className={className}
      style={style}
    >{children}</div>
  )
}

export default SocialWrap