import React from 'react'
import styles from './styles/preloader.module.scss';
import Loader from './loader';

const Preloader = () => {
  return (
    <div className={styles['preloader__container']}>
        <div className={styles['preloader__body']}>
            <Loader />
        </div>
    </div>
  )
}

export default Preloader