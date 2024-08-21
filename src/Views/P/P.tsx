import React from 'react'
import styles from './style/p.module.scss';
import { IPropsTagP } from '../../@types/common';
import classNames from 'classnames';

const P:React.FC<IPropsTagP> = ({    
    style={},
    children,
    addClass='',
    className,
}:IPropsTagP) => {
    const classNameInit = classNames({
        [styles['p']]:true,
        [styles[addClass]]:!!addClass,
        [`${className}`]:!!className,
    })

    return (
              <p
                  className={classNameInit}
                  style={style}
              >{children}</p>
            ) 
}

export default P