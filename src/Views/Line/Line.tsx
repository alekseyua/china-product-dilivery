import React from 'react'
import styles from './styles/line.module.scss';
import classNames from 'classnames';

const Line:React.FC = () => {
    const classNameInit = classNames({
        [styles['line']]: true,
    })
  return (
    <span className={classNameInit}></span>
  )
}

export default Line