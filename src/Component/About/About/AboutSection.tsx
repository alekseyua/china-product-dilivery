import React from 'react'


import Container from '../../../Views/Block/Container'
import { IPropsAboutSection } from '../../../@types/about/about';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import Image from '../../../Views/Image/Image';
import TextTitle from '../../../Views/Text/TextTitle';
import Offset from '../../../Views/Offset/Offset';
import Text from '../../../Views/Text/Text';
import Button from '../../../Views/Button/Button';
import { line } from '../../../Images';
import { IPropsDataPage } from '../../../@types/common';
import ReactPlayer from 'react-player';

interface IProps {
  infoBlock: IPropsDataPage
  handlerChangeScreen: any
}

const AboutSection: React.FC<IProps> = ({
  infoBlock,
  handlerChangeScreen,
}: IProps) => {
  return (
    <Container row addClass='container__about-section' size={1400} center>
      <BlockWrap addClass='block__about-container-left' style={{alignItems: 'center'}}>
        {/* <BlockWrap addClass='block__about-container-image'>
          <BlockWrap addClass='block__about-image-1'>
            <Image src={infoBlock?.images && infoBlock.images[0].url} />
          <BlockWrap addClass='block__about-image-2'>
              <Image src={infoBlock?.images && infoBlock.images[2].url} />
          </BlockWrap>
          </BlockWrap> 
        </BlockWrap> */}
        <ReactPlayer
          className='react-player__about'
          url={infoBlock.videos[0].url}
          width='100%'
          loop={true}
          playing={true}
          playsinline={true}
          muted={true}
          onReady={(e: any) => {
            const player = e.getInternalPlayer();
            setTimeout(() => {
              player.setAttribute('muted', 'true');
            }, 1000);
          }}
        />
      </BlockWrap>
      <BlockWrap addClass='block__about-container-right' col>
        <TextTitle addClass='text__big-title'>A.</TextTitle>
        <TextTitle sub>{infoBlock.short_description}</TextTitle>
        <TextTitle type={'h2'}>{infoBlock.title_1} <Text addClass='text__theme-title'>{infoBlock.title_2}</Text></TextTitle>
        <Offset mb={25} />
        <Text>{infoBlock.description}</Text>
        <Offset mb={45} />
        {/* <Button onClick={handlerChangeScreen} href={infoBlock.button.locationPath} iconSvgLeft={line} iconSvgRight={line} btnYellow>{infoBlock.button.title}</Button> */}
      </BlockWrap>
    </Container>

  )
}

export default AboutSection