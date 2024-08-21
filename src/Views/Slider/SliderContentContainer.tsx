import React from 'react'
import { IPropsSliderWrap } from '../../@types/Slider/slider'
import styles from './styles/slider.module.scss'

function SliderContentContainer({
    children,

}:IPropsSliderWrap) {
  return (
    <div
        className={styles['slider__content-container']}
    >{children}</div>
  )
}

export default SliderContentContainer