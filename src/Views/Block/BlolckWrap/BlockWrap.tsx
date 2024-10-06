import React from 'react'
import { IPropsWrap } from '../../../@types/common';
import classNames from 'classnames';

import styles from '../styles/common.module.scss';

import customStyles from './styles/block-wrap.module.scss';

const BlockWrap: React.FC<IPropsWrap> = ({ addClass = '', children, style = {}, location, col, ...props }: IPropsWrap) => {
  let styleInit = {}
  let classNameInit = classNames({
    [styles['block__wrap']]: true,
    [customStyles[addClass]]: !!addClass,
  })
  if (col) styleInit = { ...styleInit, flexDirection: 'column' };
  if (location) styleInit = { ...styleInit, justifyContent: location };

  return (
    <div
      className={classNameInit}
      style={{
        ...styleInit,
        ...style
      }}
      {...props}
    >{children}</div>
  )
}

export default BlockWrap