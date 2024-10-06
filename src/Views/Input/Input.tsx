import React from 'react'
import { IPropsInput } from '../../@types/common';
import useClickInside from '../../HOC/useClickInside';
import useClickOutside from '../../HOC/useClickOutside';
import classNames from 'classnames';

import styles from './styles/input.module.scss';

const Input: React.FC<IPropsInput> = ({
    placeholder,
    value,
    autocomplete = 'off',
    name = 'input',
    type = 'text',
    addClass = '',
    formInput,
    onClick = () => { },
    onChange = () => { },
    onClickInside = () => { },
    onClickOutside = () => { },
}: IPropsInput) => {
    const clickRef: any = React.useRef();
    const classNameInit = classNames({
        [styles['input']]: true,
        [styles[addClass]]: !!addClass,

    })
    useClickInside(clickRef, (e: any) => {
        onClickInside(e);

    });
    useClickOutside(clickRef, (e: any) => {
        onClickOutside(e);
    });
    function handlerChange(e: any) {
        onChange(e)
    }
    function handlerClick(e: any) {
        onClick(e)
    }
    return (
        <div
            className={classNameInit}
        >
            {
                formInput === 'input' ?
                    <input
                        ref={clickRef}
                        placeholder={placeholder}
                        autoComplete={autocomplete}
                        onChange={(e) => {
                            handlerChange(e);
                        }}
                        value={value}
                        type={type}
                        name={name}
                        onKeyDown={(ev: any) => {
                            ev.key === "Enter" && ev.target.blur();
                        }}
                        onClick={(e) => handlerClick(e)}
                    />
                    : <textarea
                        ref={clickRef}
                        placeholder={placeholder}
                        autoComplete={autocomplete}
                        onChange={(e) => {
                            handlerChange(e);
                        }}
                        value={value}
                        name={name}
                        onKeyDown={(ev: any) => {
                            ev.key === "Enter" && ev.target.blur();
                        }}
                        onClick={(e) => handlerClick(e)}
                    />
            }
        </div>
    )
}

export default Input