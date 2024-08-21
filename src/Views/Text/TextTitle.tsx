import React, { useEffect, useState } from 'react'
import stylesH from './style/h.module.scss';
import classNames from 'classnames';
import { IPropsTagTitleText } from '../../@types/common';
import GetText from '../GetText/GetText';

import styles from './style/text.module.scss';

const TextTitle:React.FC<IPropsTagTitleText> = ({    
    style={},
    children,
    addClass='',
    className,
    type='',
    sub,
    center,
}:IPropsTagTitleText) => {
    const classNameInit = classNames({
        [styles['text']]:true,
        [styles['text__title']]:true,
        [styles['text__sub-title']]:!!sub,
        [styles['text__title--center']]:!!center,
        [stylesH[type]]:!!type,
        [styles[addClass]]: !!addClass,
        [`${className}`]:!!className
    })

    switch (type) {
        case 'h1':
            return <h1 className={classNameInit} style={style}>{GetText(children)}</h1>
        case 'h2':
            return <h2 className={classNameInit} style={style}>{GetText(children)}</h2>
        case 'h3':
            return <h3 className={classNameInit} style={style}>{GetText(children)}</h3>
        case 'h4':
            return <h4 className={classNameInit} style={style}>{GetText(children)}</h4>
        case 'h5':
            return <h5 className={classNameInit} style={style}>{GetText(children)}</h5>
        case 'h6':
            return <h6 className={classNameInit} style={style}>{GetText(children)}</h6>
            
        default:
            return <div className={classNameInit} style={style}>{GetText(children)}</div>
    } 
}

export default TextTitle