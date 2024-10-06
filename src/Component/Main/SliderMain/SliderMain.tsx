import { useRef } from 'react'
import Slider from 'react-slick'
import SliderWrap from '../../../Views/Slider/SliderWrap';
import { arrowLeft, arrowRight } from '../../../Images';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import SlideWrap from '../../../Views/Slider/SlideWrap';
import Container from '../../../Views/Block/Container';
import SliderContentContainer from '../../../Views/Slider/SliderContentContainer';
import Image from '../../../Views/Image/Image';
import BackgrounColor from '../../../Views/Block/BackgrounColor';
import SliderControllerContainer from '../../../Views/Slider/SliderControllerContainer';
import SliderImageContainer from '../../../Views/Slider/SliderImageContainer';
import Button from '../../../Views/Button/Button';
import Text from '../../../Views/Text/Text';
import { IPropsBloks, IPropsDataPage } from '../../../@types/common';
import TextTitle from '../../../Views/Text/TextTitle';

interface IProps {
    infoBlock: IPropsDataPage
}

function SliderMain({
    infoBlock,
}: IProps) {
    let sliderRef: any = useRef(null);
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    return (
        <Container>

            <SliderWrap>
                <Slider {...settings} ref={slider => {
                    sliderRef = slider;
                }}>
                    {
                        infoBlock.blocks.map((item: IPropsBloks, index: number) => {
                            return (
                                <SlideWrap key={index}>
                                    <SliderImageContainer>
                                        <Image src={item.images[0].url}>
                                            <BackgrounColor />
                                        </Image>
                                    </SliderImageContainer>
                                </SlideWrap>
                            )
                        })
                    }
                </Slider>
                <SliderContentContainer>
                    <Text style={{
                        fontSize: 65,
                        top: -85,
                        position: 'relative',
                        color: 'var(--theme-color)'
                    }}>{infoBlock.title_2}</Text>
                    <TextTitle style={{
                        color: `rgba(255,255,255,0.8)`,
                        WebkitTextStroke: '1px var(--theme-color)',
                        fontSize: 125
                    }}>{infoBlock.title_1}</TextTitle>
                </SliderContentContainer>
                <SliderControllerContainer>
                    <Button onClick={previous} iconSvgLeft={arrowLeft} iconSvgLeftStyle={{ transform: `scale(1.2) translate(0px, -2px)`, filter: `invert(1)` }}></Button>
                    <Button onClick={next} iconSvgRight={arrowRight} iconSvgRightStyle={{ transform: `scale(1.2) translate(0px, -2px)`, filter: `invert(1)` }}></Button>
                </SliderControllerContainer>
            </SliderWrap>
        </Container>

    )
}

export default SliderMain