import React from 'react'
import { IPropsContainer } from '../../@types/common';
import classNames from 'classnames';
import styles from './styles/container.module.scss';

const  Container: React.FC<IPropsContainer> = ({children, style, addClass='', center, size, row}:IPropsContainer) => {
  const className = classNames({
    [styles['container']]: true,
    [styles['container-'+ size]]: size,
    [styles['container-row']]: row,
    [styles['container-center']]: center,
    [styles[addClass]]:addClass
  })
  let styleInit = {};
  // if(size) styleInit = {...styleInit, maxWidth: size};
  return (
    <div
        className={className}
        style={{
          ...styleInit,
          ...style
        }}
    >{children}</div>
  )
}

export default Container