import React from 'react'
import { IPropsSlider} from '../../@types/Slider/slider'
import styles from './styles/slider.module.scss'

function SliderReatureControllerContainer({
    children,

}:IPropsSlider) {
  return (
    <div
        className={styles['slider__feature-controller-container']}
    >{children}</div>
  )
}

export default SliderReatureControllerContainer