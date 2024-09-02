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
            return GetText(children) ? <h1 className={classNameInit} style={style}>{GetText(children)}</h1> : null
        case 'h2':
            return GetText(children) ? <h2 className={classNameInit} style={style}>{GetText(children)}</h2> : null
        case 'h3':
            return GetText(children) ? <h3 className={classNameInit} style={style}>{GetText(children)}</h3> : null
        case 'h4':
            return GetText(children) ? <h4 className={classNameInit} style={style}>{GetText(children)}</h4> : null
        case 'h5':
            return GetText(children) ? <h5 className={classNameInit} style={style}>{GetText(children)}</h5> : null
        case 'h6':
            return GetText(children) ? <h6 className={classNameInit} style={style}>{GetText(children)}</h6> : null
            
        default:
            return GetText(children)? <div className={classNameInit} style={style}>{GetText(children)}</div> : null
    } 
}

export default TextTitle