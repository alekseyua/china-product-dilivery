import Slider from 'react-slick'
import { avatar, quota } from '../../../Images';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Image from '../../../Views/Image/Image';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import Offset from '../../../Views/Offset/Offset';
import IconSvg from '../../../Views/Icon/IconSvg';
import TextTitle from '../../../Views/Text/TextTitle';
import BlockTwoSection from '../../../Views/Block/BlockTwoSection/BlockTwoSection';
import SliderContainer from '../../../Views/Slider/SliderContainer';
import { IPropsBloks } from '../../../@types/common';

interface IProps {
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
    infinite: true,
    speed: 2500,
    autoplaySpeed: 5000,
    slidesToShow: countSlide,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992.1,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <SliderContainer style={style}>
      <Slider {...settings}>
        {
          listCards && listCards?.length &&
          listCards.map((card: IPropsBloks): any => {
            return (<BlockWrap key={card.id} col addClass='block__client-card-container'>
              <BlockWrap>
                {
                  card.images[0].url.includes('.pdf')?
                    <iframe
                      id={`${card.id}`}
                      title={`${card.id}`}
                      src={card.images[0].url}
                      style={{
                        width: '100%',
                        overflow: 'hidden'
                      }}
                    />
                    : <Image
                      src={card.images[0].url}
                      style={{
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
    </SliderContainer>
  )
}

export default SliderClientSayMain