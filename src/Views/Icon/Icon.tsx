import React from 'react'
import { IPropsIcon } from '../../@types/image/image';
import styles from './styles/icon.module.scss';
import classNames from 'classnames';

const  Icon: React.FC<IPropsIcon> = ({
  src,
  alt,
  style={},
  addClass='',
}:IPropsIcon) => {
  const className = classNames({    
    [styles['icon']]:true,
    [styles[addClass]]:addClass,
  })

  
  return (
    <div
        className={className}
    >
      <img 
        src={src}
        style={{
          ...style
        }}
        alt={alt ?? src.split('/')[src.split('/').length-1]}
      />

    </div>
  )
}

export default Icon