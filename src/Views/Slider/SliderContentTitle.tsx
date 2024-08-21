import React from 'react'
import { IPropsSlider} from '../../@types/Slider/slider'
import styles from './styles/slider.module.scss'

function SliderContentTitle({
    children,
    style={},
}:IPropsSlider) {
  return (
    <h1
        className={styles['slider__content-title']}
        style={style}
    >{children}</h1>
  )
}

export default SliderContentTitle