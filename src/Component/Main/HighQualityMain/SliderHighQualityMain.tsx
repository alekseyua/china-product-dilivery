import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Container from '../../../Views/Block/Container';
import Button from '../../../Views/Button/Button';
import { IPropsHighQualityMain } from '../../../@types/feature-main/feature-main';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import { decimalDigit } from '../../../helpers/helpers';
import BlockFlex from '../../../Views/Block/BlockTwoSection/BlockTwoSection';
import Arrow from '../../../Views/Arrow/Arrow';
import Line from '../../../Views/Line/Line';
import Text from '../../../Views/Text/Text';
import TextTitle from '../../../Views/Text/TextTitle';
import Image from '../../../Views/Image/Image';
import IconSvg from '../../../Views/Icon/IconSvg';
import { line } from '../../../Images';
import Offset from '../../../Views/Offset/Offset';

function SliderHighQualityMain({
  onClick,
  listCards,
}: {
  listCards: any, onClick: any & IPropsHighQualityMain
}) {
  const [nav1, setNav1]: any = useState(null);
  const [nav2, setNav2]: any = useState(null);
  let sliderRef1: any = useRef(null);
  let sliderRef2: any = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const next = () => {
    sliderRef1.slickNext();
  };
  const previous = () => {
    sliderRef1.slickPrev();
  };

  return (
    <Container>
      <BlockWrap addClass='block__container-high-quality'>
        <BlockWrap addClass='block__container-high-quality-left'>
          <BlockWrap addClass='block__high-quality-sidebar-container' col>
            <Button onClick={previous} addClass='button__high-quality-up'><Arrow up /></Button>

            <Slider
              asNavFor={nav1}
              ref={slider => (sliderRef2 = slider)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
              vertical={true}
              infinite={true}
              autoplay={true}
              autoplaySpeed={3500}
              speed={2000}
            // dots = {true}
            >
              {
                listCards && listCards?.length &&
                listCards.map((card: any): any => {
                  return (<BlockWrap key={card.id} addClass='block__container-high-quality-list-items' col>
                    <Text>{decimalDigit(card.id + 1)}</Text>
                    <TextTitle addClass='text__title-item-high-quality-sidebar' type={'h4'}>{card.title.name}</TextTitle>
                    {/* <Line /> */}
                  </BlockWrap>
                  )
                })
              }
            </Slider>
            <Button onClick={next} addClass='button__high-quality-down'><Arrow down /></Button>
          </BlockWrap>
        </BlockWrap>

        <BlockWrap addClass='block__container-high-quality-right'>
          <Slider
            asNavFor={nav2}
            ref={slider => (sliderRef1 = slider)}
            vertical={false}
            slidesToShow={1}
          // dots={true}

          >
            {
              listCards && listCards?.length &&
              listCards.map((card: any): any => {
                // console.log({ card })

                return (
                  <BlockWrap key={card.id}>
                    <BlockWrap addClass='block__container-high-quality-prevwiev-item'>
                      <BlockWrap col addClass='block__wrap-high-quality-prevwiev-item'>
                        <BlockWrap addClass='block__wrap-high-quality-prevwiev-item-icons'>
                          <IconSvg src={card.title.icon} />
                          <Text addClass='text__stroke-title'>{decimalDigit(card.id + 1)}</Text>
                        </BlockWrap>
                        <Offset mb={10} />
                        <TextTitle style={{
                          fontWeight: 100,
                          lineHeight: 1.333,
                        }} type={'h4'}>{card.title.name}</TextTitle>
                        <Offset mb={10} />
                        <Text>{card.title.desc}</Text>
                        <Button addClass={'button__transporent'} href={card.title.button.locationPath} onClick={onClick} iconSvgLeft={line} iconSvgRight={line} btnTransparent>
                          <Text>{card.title.button.name}</Text>
                        </Button>
                      </BlockWrap>

                      <BlockWrap addClass='block__container-high-quality-prevwiev-image'>
                        <Image src={card.image} />
                      </BlockWrap>
                    </BlockWrap>
                    </BlockWrap>
                )
              })
            }
          </Slider>
        </BlockWrap>


      </BlockWrap>
    </Container>

  )
}

export default SliderHighQualityMain