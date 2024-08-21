import React from 'react'
import { IPropsSlider} from '../../@types/Slider/slider'
import styles from './styles/slider.module.scss'

function SliderContentSubTitle({
    children,

}:IPropsSlider) {
  return (
    <div
        className={styles['slider__content-sub-title']}
    >{children}</div>
  )
}

export default SliderContentSubTitle