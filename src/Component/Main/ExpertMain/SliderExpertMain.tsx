import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Container from '../../../Views/Block/Container';
import { IPropsExpertMain } from '../../../@types/expert-main/expert-main';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import CardExpert from '../../../Views/Cards/Card-Expert/CardExpert';
import { IPropsDataPage } from '../../../@types/common';


interface IProps {
  listCards: IPropsDataPage['blocks'],
  setRefSlider?: any,
  countSlider?: number,
  titleandcocial?: boolean | undefined & IPropsExpertMain
}

function SliderExpertMain({
  listCards,
  setRefSlider =()=>{},
  countSlider=1,
  titleandcocial,
}: IProps) {
  let sliderRef1: any = useRef(null);
  const next = () => {
    sliderRef1.slickNext();
  };
  const previous = () => {
    sliderRef1.slickPrev();
  };


  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: countSlider <3 ? 5 : countSlider,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    // centerPadding: '100px',
    // centerMode:true,
    // rows: 1,
    // slidesPerRow:4,
    responsive: [
      {
        breakpoint: 1200.1,
        settings: {
          slidesToShow: countSlider !== 1? countSlider - 1 : 1,
        }
      },
      {
        breakpoint: 800.1,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600.1,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
    // afterChange: () => {
    //  const activeItemSlider: any = document.querySelectorAll('.slick-current>div>div')[0]
    //  activeItemSlider.style.setProperty('--border-color-expert', 'var(--theme-color)')
    // },
    // beforeChange: () => {
    //   const activeItemSlider: any = document.querySelectorAll('.slick-current>div>div')[0]
    //  activeItemSlider.style.setProperty('--border-color-expert', 'var(--border-color )')
    // },

  };

  return (
      <BlockWrap addClass='block__expert-container'>
      <Slider {...settings} ref={slider => {
        (sliderRef1 = slider)
        setRefSlider(slider)
        }}>
              {
                listCards && listCards?.length &&
                listCards.map((card: any): any => {
                  console.log({card})
                   return (
                   <CardExpert 
                      key={card.id}
                      card={card}
                      titleandcocial={titleandcocial}
                   />                   
                  )
                })
              }
            </Slider>

        </BlockWrap>    
  )
}

export default SliderExpertMain