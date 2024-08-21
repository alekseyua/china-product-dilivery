import React, { useEffect } from 'react'
import { IPropsIcon } from '../../@types/image/image';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

import styles from './styles/icon.module.scss';

const  IconSvg: React.FC<IPropsIcon> = ({
  src,
  alt,
  style={},
  addClass='',
}:IPropsIcon) => {
  const className = classNames({    
    [styles['icon__svg']]:true,
    [styles[addClass]]:addClass,
  })

  useEffect(()=>{
    // const svg = new SVGAElement()
    // s
  },[src])
  
  return (<ReactSVG 
      className={className}
      style={style}
    src={src} />)
}

export default IconSvg