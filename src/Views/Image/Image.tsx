import React from 'react'
import { IPropsImage } from '../../@types/image/image';
import classNames from 'classnames';
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from './styles/image.module.scss';

const Image: React.FC<IPropsImage> = ({
  src,
  alt,
  style = {},
  children,
  addClass = '',
}: IPropsImage) => {
  const className = classNames({
    [styles['image__picture']]: true,
    [styles[addClass]]: addClass,
  })

  return (
    <div
      className={className}
    >
      <LazyLoadImage
        alt={alt ?? src.split('/')[src.split('/').length - 1]}
        effect="blur"
        src={src}
        visibleByDefault={true}
        style={{
          objectFit: 'cover',
          width: '100vw',
          ...style
        }}
      />
      {children}
    </div>
  )
}

export default Image