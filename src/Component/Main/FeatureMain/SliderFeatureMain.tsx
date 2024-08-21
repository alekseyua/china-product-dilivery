import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { arrowLeft, arrowRight, location } from '../../../Images';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Container from '../../../Views/Block/Container';
import Image from '../../../Views/Image/Image';
import SliderControllerContainer from '../../../Views/Slider/SliderControllerContainer';
import Button from '../../../Views/Button/Button';
import Text from '../../../Views/Text/Text';
import { IPropsFeatureMain } from '../../../@types/feature-main/feature-main';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import { Link } from 'react-router-dom';
import Offset from '../../../Views/Offset/Offset';
import IconSvg from '../../../Views/Icon/IconSvg';
import SliderReatureControllerContainer from '../../../Views/Slider/SliderReatureControllerContainer';
import { decimalDigit } from '../../../helpers/helpers';
import TextTitle from '../../../Views/Text/TextTitle';
import { IPropsBloks } from '../../../@types/common';

interface IProps {
  listCards: IPropsBloks[]
}

function SliderFeatureMain({
  listCards
}: IProps) {

  let sliderRef: any = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerPadding: "60px",

    variableWidth: true,
    autoplay: true,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current: any, next: any): any => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1200.1,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767.1,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  // useEffect(()=>{
//     .slick - track {
//       display: flex;
//     }
// .slick - track.slick - slide {
//       display: flex;
//       height: auto;
//       align - items: center;
//       justify - content: center;
//     }
    // document.querySelector('.slick - track')  && document.querySelector('.slick - track')?.style.setProperty('display', 'flex')
//     addCssProperty(document.querySelectorAll('.slick-track'),{
//       'display': 'flex'
//     })
//     addCssProperty(document.querySelectorAll('.slick-track>.slick-slide'),{
//       'display': 'flex',
//       'height': 'auto',
//       'align-items': 'center',
//       'justify-content': 'center',
//     })
// console.log('render')
//   },[])
  return (
    <Container style={{
      overflow: 'hidden',
      maxWidth: 1200
    }}>
      <div style={{ position: 'relative' }}>
        <Slider {...settings} ref={slider => {
          sliderRef = slider;
          
        }}>
          {
            listCards && listCards?.length &&
            listCards.map((card: any, index: number): any => {
              return (
                <div className="project-card" key={card.id}>
                  <BlockWrap col
                    style={{ marginRight: 20, maxWidth: 320  }}
                  >
                    <Image src={card.images[0].url} alt="project image" />
                    <BlockWrap style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                      <BlockWrap col >
                        <Link to={'/'}>
                          <TextTitle type='h3' addClass='text__feature-card-title'>
                            {card.title_1}
                          </TextTitle>
                        </Link>
                        <BlockWrap><IconSvg src={location} />
                          <Offset mr={10} />
                          <Text addClass='text__feature-text-location'>{card.title_2}</Text>
                        </BlockWrap>
                      </BlockWrap>
                      <Text addClass='text__stroke-title'
                        style={{ fontSize: 60 }}
                      >{decimalDigit(index + 1)}</Text>
                    </BlockWrap>
                  </BlockWrap>
                </div>
              )
            })
          }
        </Slider>
        <SliderReatureControllerContainer>
          <Button onClick={previous} iconSvgLeft={arrowLeft} iconSvgLeftStyle={{ transform: `scale(1.3) translate(0px, -2px)`, filter: `invert(.5)` }}></Button>
          <input
            onChange={e => sliderRef.slickGoTo(e.target.value)}
            className='test'
            value={slideIndex}
            type="range"
            min={0}
            max={listCards.length - 1}
          />
          <Button onClick={next} iconSvgRight={arrowRight} iconSvgRightStyle={{ transform: `scale(1.3) translate(0px, -2px)`, filter: `invert(.5)` }}></Button>
        </SliderReatureControllerContainer>
      </div>
    </Container>

  )
}

export default SliderFeatureMain