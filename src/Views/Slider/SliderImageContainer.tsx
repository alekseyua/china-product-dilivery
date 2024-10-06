import { IPropsSliderWrap } from '../../@types/Slider/slider'
import styles from './styles/slider.module.scss'

function SliderImageContainer({
  children,

}: IPropsSliderWrap) {
  return (
    <div
      className={styles['slider__image-container']}
    >{children}</div>
  )
}

export default SliderImageContainer