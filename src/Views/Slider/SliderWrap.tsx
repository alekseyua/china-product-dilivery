import React from 'react'
import { IPropsSliderWrap } from '../../@types/Slider/slider'
import styles from './styles/slider.module.scss'

function SliderWrap({
    children,

}:IPropsSliderWrap) {
  return (
    <div
        className={styles['slider__container-wrap']}
    >{children}</div>
  )
}

export default SliderWrap