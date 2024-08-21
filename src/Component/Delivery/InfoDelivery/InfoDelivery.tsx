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
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';

interface IProps {
  infoBlock: IPropsDataPage
  handlerChangeScreen: any
}

const InfoDelivery: React.FC<IProps> = ({
  infoBlock,
  handlerChangeScreen,
}: IProps) => {
  return (
    <Container row addClass='container__delivery-info-section' center size={1400}>
      {/* <BlockWrap addClass='block__about-container-left' > */}
      <BlockWrap addClass='block__delivery-info-container-image'>
        {/* <BlockWrap addClass='block__about-image-1'> */}
          <Image src={infoBlock.images[0].url} />
        <BlockWrap addClass='block__delivery-info-container-image--title'>
          <HeaderSectionFull
            title={infoBlock?.title_1}
            slogan={infoBlock?.title_2}
          />
        </BlockWrap>
      </BlockWrap>
      {/* </BlockWrap> */}
      <BlockWrap addClass='block__delivery-info-container-content' col>
        <TextTitle sub>{infoBlock.short_description}</TextTitle>
        <Offset mb={25} />
        <Text>{infoBlock.description}</Text>
        <Offset mb={45} />
        {/* <Button onClick={handlerChangeScreen} href={infoBlock.button.locationPath} iconSvgLeft={line} iconSvgRight={line} btnYellow>{infoBlock.button.title}</Button> */}
      </BlockWrap>
    </Container>

  )
}

export default InfoDelivery