import classNames from 'classnames'
import React from 'react'
import styles from '../styles/common.module.scss';
import { IPropsBlockFlex } from '../../../@types/common';

import addStyle from './styles/block-two-section.module.scss';

const BlockTwoSection:React.FC<IPropsBlockFlex> = ({
    children,
    addClass='',
    style={},
    start,
    end,
    row,
}:IPropsBlockFlex) => {
    const className = classNames({
        [styles['block__flex']]:true,
        [styles['block__flex-row']]:row,
        [addStyle[addClass]]: addClass
    })
    let additionStyles = {}
    if(start) additionStyles = {...additionStyles, justifyContent: 'flex-start'};
    if(end) additionStyles = {...additionStyles, justifyContent: 'flex-end'};
  return (
    <div
        className={className}
        style={{
            ...additionStyles,
            ...style
        }}
    >{children}</div>
  )
}

export default BlockTwoSection