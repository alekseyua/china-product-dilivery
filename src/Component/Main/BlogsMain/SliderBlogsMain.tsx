import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { arrowLeft, arrowRight } from '../../../Images';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Container from '../../../Views/Block/Container';
import Image from '../../../Views/Image/Image';
import SliderControllerContainer from '../../../Views/Slider/SliderControllerContainer';
import Button from '../../../Views/Button/Button';
import Text from '../../../Views/Text/Text';

import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import { Link } from 'react-router-dom';
import Offset from '../../../Views/Offset/Offset';
import IconSvg from '../../../Views/Icon/IconSvg';
import SliderReatureControllerContainer from '../../../Views/Slider/SliderReatureControllerContainer';
import { decimalDigit } from '../../../helpers/helpers';
import TextTitle from '../../../Views/Text/TextTitle';
import { IPropsBlogsMain } from '../../../@types/blogs-main/blogs-main';
import ButtonTransporent from '../../Chunks/ButtonTransporent/ButtonTransporent';
import BlockGrid from '../../../Views/Block/BlockGrid/BlockGrid';
import { IPropsBloks } from '../../../@types/common';
import ReactPlayer from 'react-player';

interface IProps{
  listCards: IPropsBloks,
  onClick: any & 
  IPropsBlogsMain
}

function SliderBlogsMain({
  onClick,
  listCards
}: {
  listCards: any,
  onClick: any & 
  IPropsBlogsMain
}) {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "10px",

    // autoplay: true,
    responsive: [
      {
        breakpoint: 1200.1,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768.1,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <BlockWrap addClass='block__expert-container'>

      <Slider {...settings} >
        {
          listCards && listCards?.length &&
          listCards.map((card: IPropsBloks): any => {
            return (
              <BlockWrap 
              key={card.id}
              addClass='block__blogs-container-card'
                style={{
                }}
              >                
                <BlockWrap>
                  {/* <Image src={card.images[0].url} /> */}
<ReactPlayer
  url={card.videos[0].url}

                    loop={true}
                    playing={true}
                    playsinline={true}
                    // controls
                    muted={true}
/>
                </BlockWrap>

                <Offset mt={20} style={{padding: `0px 40px`}}>
                  <TextTitle type='h6' addClass='text__blogs-main-title'>
                    {card.title_1}
                    </TextTitle>
                <Offset mb={10} />
                  <Text addClass='text__blogs-main-desc'>{card.description}</Text>
                <Offset mb={10} />
                <BlockWrap>
                  <ButtonTransporent
                    name={'посетить'}
                    href={'https://youtube.com'}
                    onClick={onClick}

                  />
                </BlockWrap>
                </Offset>
              </BlockWrap>
            )
          })
        }
      </Slider>
    </BlockWrap>

  )
}

export default SliderBlogsMain