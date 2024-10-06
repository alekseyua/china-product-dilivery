import { IPropsSliderWrap } from '../../@types/Slider/slider'
import styles from './styles/slider.module.scss'

function SliderContainer({
  children,

}: IPropsSliderWrap) {
  return (
    <div
      className={styles['slider__container']}
    >{children}</div>
  )
}

export default SliderContainer