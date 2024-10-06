import classNames from 'classnames'
import React from 'react'
import { IPropsBlockGrid } from '../../../@types/common';

import styles from '../styles/common.module.scss';

const BlockGrid: React.FC<IPropsBlockGrid> = ({
    children,
    addClass = '',
    style = {},
    col,
    row,
}: IPropsBlockGrid) => {
    const className = classNames({
        [styles['block__grid']]: true,
        [styles[addClass]]: addClass
    })
    if (row) {
        style = { ...style, gridTemplateRows: `repeat(${row}, 1fr)`, }
    }
    if (col) {
        style = { ...style, gridTemplateColumns: `repeat(${col}, 1fr)`, }
    }
    return (
        <div
            className={className}
            style={{
                ...style
            }}
        >{children}</div>
    )
}

export default BlockGrid