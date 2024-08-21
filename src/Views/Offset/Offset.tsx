import React from 'react'
import { IPropsOffset } from '../../@types/common';
import classNames from 'classnames';
import styles from './styles/offset.module.scss';

const Offset:React.FC<IPropsOffset> = ({
    children,
    mt,
    mb,
    ml,
    mr,
    pt,
    pb,
    pl,
    pr,
    style,
    sectionTop,
    sectionBottom,
}: IPropsOffset) => {
    let stylesInit = {}
    if(mt) stylesInit = {...stylesInit, marginTop: mt};
    if(mb) stylesInit = {...stylesInit, marginBottom: mb};
    if(ml) stylesInit = {...stylesInit, marginleft: ml};
    if(mr) stylesInit = {...stylesInit, marginRight: mr};
    if(pt) stylesInit = {...stylesInit, paddingTop: pt};
    if(pb) stylesInit = {...stylesInit, paddingBottom: pb};
    if(pl) stylesInit = {...stylesInit, paddingleft: pl};
    if(pr) stylesInit = {...stylesInit, paddingRight: pr};
    const classNameInit = classNames({
      [styles['offset__section-top']]: sectionTop, 
      [styles['offset__section-bottom']]: sectionBottom, 
    })
  return (
    <div
        className={classNameInit}
        style={{...stylesInit, ...style}}
    >{children}</div>
  )
}

export default Offset