import classNames from 'classnames';
import React from 'react'
import Select from 'react-select';

import styles from './styles/select.module.scss'

interface IProps {
    listOptions: {
        readonly value: string;
        readonly label: string;
        readonly color: string;
        readonly isFixed?: boolean;
        readonly isDisabled?: boolean;
    }[];
    name: string;
    style?: {};
    value: {};
    addClass?: string;
    onChange: () => void;
    placeholder?: string;
}

const SelectComponent: React.FC<IProps> = ({
    name,
    style,
    value,
    addClass ='',
    listOptions,
    onChange,
    placeholder = 'Выберите...'  // default 'Выберите...'
}: IProps) => {
    const className = classNames({
        [styles['select']]: true,
        [styles[addClass]]: addClass
    })
  return (
    <Select
        options={listOptions}
        // defaultValue={listOptions[0]}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        styles={style}
        className={className}
    />
  )
}

export default SelectComponent