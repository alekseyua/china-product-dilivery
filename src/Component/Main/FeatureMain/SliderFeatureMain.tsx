import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { arrowLeft, arrowRight } from '../../../Images';
import Container from '../../../Views/Block/Container';
import Image from '../../../Views/Image/Image';
import Button from '../../../Views/Button/Button';
import Text from '../../../Views/Text/Text';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import { Link } from 'react-router-dom';
import TextTitle from '../../../Views/Text/TextTitle';
import { IPropsBloks } from '../../../@types/common';
import { decimalDigit } from '../../../helpers/helpers';
import SliderReatureControllerContainer from '../../../Views/Slider/SliderReatureControllerContainer';

interface IProps {
  listCards: IPropsBloks[]
}

function SliderFeatureMain({ listCards }: IProps) {
  const sliderRef = useRef<any>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    afterChange: () => setSlideIndex(slideIndex + 1),
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
          variableWidth: false,
          slidesToShow: 1,
        }
      },
    ]
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <Container style={{ overflow: 'hidden', maxWidth: 1200 }}>
      <div style={{ position: 'relative' }}>
        <Slider {...settings} ref={sliderRef}>
          {listCards && listCards.length && listCards.map((card: any, index: number) => (
            <div className="project-card" key={card.id}>
              <BlockWrap col style={{ marginRight: 20, maxWidth: 320 }}>
                <Image src={card.images[0].url} addClass='image__feature-card-image' />
                <BlockWrap style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <BlockWrap col>
                    <Link to={'/'}>
                      <TextTitle type='h3' addClass='text__feature-card-title'>
                        {card.title_1}
                      </TextTitle>
                    </Link>
                    <BlockWrap>
                      <Text addClass='text__feature-text-location'>{card.title_2}</Text>
                    </BlockWrap>
                  </BlockWrap>
                  <Text addClass='text__stroke-title' style={{ fontSize: 60, width: '100%', textAlign: 'end', top: -11, position: 'relative' }}>
                    {decimalDigit(index + 1)}
                  </Text>
                </BlockWrap>
              </BlockWrap>
            </div>
          ))}
        </Slider>
        <SliderReatureControllerContainer>
          <Button onClick={previous} iconSvgLeft={arrowLeft} iconSvgLeftStyle={{ transform: `scale(1.3) translate(0px, -2px)`, filter: `invert(.5)` }} />
          <input
            onChange={e => {
              if (sliderRef.current) {
                sliderRef.current.slickGoTo(Number(e.target.value));
              }
            }}
            className='test'
            value={slideIndex}
            type="range"
            min={0}
            max={listCards.length - 1}
          />
          <Button onClick={next} iconSvgRight={arrowRight} iconSvgRightStyle={{ transform: `scale(1.3) translate(0px, -2px)`, filter: `invert(.5)` }} />
        </SliderReatureControllerContainer>
      </div>
    </Container>
  );
}

export default SliderFeatureMain;