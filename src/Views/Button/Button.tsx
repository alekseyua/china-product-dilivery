import React from 'react'
import { IPropsButton } from '../../@types/button/button'
import classNames from 'classnames';
import { WithRouterProps } from '../../@types/hoc/hoc';
import IconSvg from '../Icon/IconSvg';

import styles from './style/button.module.scss';

; const Button: React.FC<IPropsButton & WithRouterProps> = ({
    type,
    href,
    title,
    style = {},
    onClick,
    addClass = '',
    children,
    navigate,
    btnYellow,
    btnTransparent,
    iconSvgLeft,
    iconSvgRight,
    iconSvgLeftStyle = {},
    iconSvgRightStyle = {},
}: IPropsButton & WithRouterProps) => {
    const className = classNames({
        [styles['button__container']]: true,
        [styles['button__yellow']]: btnYellow,
        [styles['button__transparent']]: btnTransparent,
        [styles[addClass]]: !!addClass
    })
    const handlerClick = (e: any) => {
        onClick({
            e,
            href,
        })
    }

    return (
        <div
            className={className}
            onClick={handlerClick}
        >
            <button
                style={style}
                type={type}
            >
                {iconSvgLeft ? <IconSvg addClass='icon__button' style={iconSvgLeftStyle} src={iconSvgLeft} /> : null}
                {children}
                {title}
                {iconSvgRight ? <IconSvg addClass='icon__button' style={iconSvgRightStyle} src={iconSvgRight} /> : null}
            </button>
        </div>
    )
}

export default (Button)