import { IPropsSliderWrap } from '../../@types/Slider/slider'
import styles from './styles/slider.module.scss'

function SlideWrap({
  children,

}: IPropsSliderWrap) {
  return (
    <div
      id={'mainSlider'}
      className={styles['slider__slide-wrap']}
    >{children}</div>
  )
}

export default SlideWrap