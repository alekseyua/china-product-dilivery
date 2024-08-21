import React from 'react'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap'
import BlockFlex from '../../../Views/Block/BlockTwoSection/BlockTwoSection'
import TextTitle from '../../../Views/Text/TextTitle'
import Text from '../../../Views/Text/Text'
import Button from '../../../Views/Button/Button'
import { IPropsHeaderSliderCreative } from '../../../@types/chunk/chunk'
import { arrowLeft, arrowRight, line } from '../../../Images'
import ButtonTransporent from '../ButtonTransporent/ButtonTransporent'
import SliderControllerContainer from '../../../Views/Slider/SliderControllerContainer'

const HeaderSliderCreative: React.FC<IPropsHeaderSliderCreative> = ({
    title,
    slogan,
    previous,
    next,
}: IPropsHeaderSliderCreative) => {
    return (
        <BlockWrap addClass='block__container-header-section'>
            <BlockFlex start style={{
                display: 'block'
            }}>
                <TextTitle addClass='text__big-title'>E.</TextTitle>
                <TextTitle type='h2' addClass='text__header-section--full'>{title}
                    <Text addClass='text__stroke-title'>{slogan}</Text>
                </TextTitle>
            </BlockFlex>
            <SliderControllerContainer style={{
                backgroundImage: 'none'
            }}>
                <Button addClass='button__slider-creative-action' onClick={previous} iconSvgLeft={arrowLeft} iconSvgLeftStyle={{ transform: `scale(1.2) translate(0px, -2px)`, filter: `invert(1)` }}></Button>
                <Button addClass='button__slider-creative-action' onClick={next} iconSvgRight={arrowRight} iconSvgRightStyle={{ transform: `scale(1.2) translate(0px, -2px)`, filter: `invert(1)` }}></Button>
            </SliderControllerContainer>
        </BlockWrap>
    )
}

export default HeaderSliderCreative