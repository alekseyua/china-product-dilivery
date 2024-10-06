import React from 'react'
import classNames from 'classnames';

import styles from './styles/line.module.scss';

interface IProps {
  thick?: boolean;
}

const Line: React.FC<IProps> = ({ thick }: IProps) => {
  const classNameInit = classNames({
    [styles['line']]: true,
    [styles['line--thick']]: thick,
  })
  return (
    <span className={classNameInit}></span>
  )
}

export default Line