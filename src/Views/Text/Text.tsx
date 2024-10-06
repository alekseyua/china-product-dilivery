import React from 'react'
import classNames from 'classnames';
import { IPropsTagText } from '../../@types/common';
import GetText from '../GetText/GetText';

import styles from './style/text.module.scss';

const Text: React.FC<IPropsTagText> = ({
    style = {},
    children,
    addClass = '',
    tag,
}: IPropsTagText) => {
    const className = classNames({
        [styles['text']]: true,
        [styles[addClass]]: addClass,
    })
    switch (tag) {
        case 'span':
            return <div className={className} style={style}>{GetText(children)}</div>
        case 'p':
            return <p className={className} style={style}>{GetText(children)}</p>
        default: return <div
            className={className}
            style={{

                ...style
            }}
        >{GetText(children)}</div>
    }
}

export default Text