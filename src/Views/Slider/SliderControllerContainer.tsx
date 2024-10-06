import { IPropsSlider } from '../../@types/Slider/slider'
import styles from './styles/slider.module.scss'

function SliderControllerContainer({
  children,
  style,
}: IPropsSlider) {
  return (
    <div
      className={styles['slider__controller-container']}
      style={style}
    >{children}</div>
  )
}

export default SliderControllerContainer