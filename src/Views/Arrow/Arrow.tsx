import React from 'react'
import styles from './styles/arrow.module.scss';
import { IPropsArrow } from '../../@types/common';
import classNames from 'classnames';

const Arrow:React.FC<IPropsArrow> = ({
    left,right,up,down, addClass=''
}:IPropsArrow) => {
    const classNameInit = classNames({
        [styles['arrow']]: true,
        [styles['arrow-left']]:left,
        [styles['arrow-up']]:up,
        [styles['arrow-right']]:right,
        [styles['arrow-down']]:down,
        [styles[addClass]]:addClass,
    })
  return (
    <span className={classNameInit}></span>
  )
}

export default Arrow