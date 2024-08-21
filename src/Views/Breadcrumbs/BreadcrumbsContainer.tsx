import React from 'react'
import classNames from 'classnames';
import { IProps } from '../../@types/common';

import styles from './styles/breadcrumbs.module.scss';

const BreadcrumbsContainer:React.FC<IProps> = ({children}:IProps) => {
    const classNameInit = classNames({
        [styles['braedcrumbs']]: true,
    })
  return (
    <div className={classNameInit}>{children}</div>
  )
}

export default BreadcrumbsContainer