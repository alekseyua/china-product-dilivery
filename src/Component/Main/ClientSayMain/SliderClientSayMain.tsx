import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { arrowLeft, arrowRight, avatar, quota} from '../../../Images';
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
import { IPropsClientSayMain } from '../../../@types/client-say/client-say';
import BlockTwoSection from '../../../Views/Block/BlockTwoSection/BlockTwoSection';
import ClientSay from '../../../Views/Cards/Card-ClientSey/ClientSey';
import SliderWrap from '../../../Views/Slider/SliderWrap';
import SliderContainer from '../../../Views/Slider/SliderContainer';
import { IPropsBloks } from '../../../@types/common';
// import { Document, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

interface IProps{
  style?: any;
  listCards: IPropsBloks[];
  countSlide?: number | undefined;
}

function SliderClientSayMain({
  style,
    listCards,
    countSlide = 2,
}: IProps) {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 2500,
        autoplaySpeed: 5000,
        slidesToShow: countSlide,
        slidesToScroll: 1,
        // autoplay: true,
        // initialSlide: 0,
        // centerPadding: "0px",
        // vertical: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 992.1,
              settings: {
                slidesToShow: 1,
                // centerMode: true,
                // centerPadding: "60px",

              }
            },
        ]
      };


  return (
    <SliderContainer style={style}>
      {/* <div className="slider-container"> */}

        <Slider {...settings}>
          {/* <ClientSay list={listCards}/>  
                     */}
                      {
                            listCards && listCards?.length && 
                                listCards.map((card: IPropsBloks):any => {
                            return (<BlockWrap key={card.id} col addClass='block__client-card-container'>
                           <BlockWrap>
                             {
                                  card.images[0].url.includes('.pdf')
                                  ?
                                    <iframe 
                                      id={`${card.id}`}
                                      title={`${card.id}`}
                                      src={card.images[0].url} 
                                      style={{
                                        width: '100%',
                                        height: '180px',
                                        overflow: 'hidden'
                                      }}
                                    />
                                    : <Image 
                                        src={card.images[0].url} 
                                        style={{
                                          maxHeight: 180,
                                          objectFit: 'contain'
                                        }}
                                      />
                             }

                           </BlockWrap>
                           <Offset mb={40} />
                           <BlockTwoSection addClass='block__client-card-container-self-info'>
                             <BlockTwoSection row>
                               <Image addClass='image__client-avatar' src={avatar} />
                               <BlockWrap addClass='block__client-card-self-info' col>
                                 <TextTitle type='h5' addClass='text__client-card-title-self-info-title'>{card.title_1}</TextTitle>
                                 {/* <TextTitle sub>{card.infoClient.profetion}</TextTitle> */}
                               </BlockWrap>
                             </BlockTwoSection>
                             <BlockWrap addClass='block__client-card-self-info-icon'>
                                  <IconSvg src={quota} />
                             </BlockWrap>
                           </BlockTwoSection>
                         </BlockWrap>
                            )
                          })
                        }
        </Slider>       
      {/* </div> */}
    </SliderContainer>

  )
}

export default SliderClientSayMain