import React from 'react'


import Container from '../../../Views/Block/Container'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import TextTitle from '../../../Views/Text/TextTitle';
import Offset from '../../../Views/Offset/Offset';
import Text from '../../../Views/Text/Text';
import { IPropsDataPage } from '../../../@types/common';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';

interface IProps {
  infoBlock: IPropsDataPage
}

const PriceFullfilment: React.FC<IProps> = ({
  infoBlock,
}: IProps) => {
  return (
    <Container row addClass='container__delivery-info-section' center size={1400}>
      <HeaderSectionFull
        title={infoBlock?.title_1}
        slogan={infoBlock?.title_2}
      />
      <BlockWrap col>
        <TextTitle sub>{infoBlock.short_description}</TextTitle>
        <Offset mb={25} />
        <Text>{infoBlock.description}</Text>
        <Offset mb={45} />
      </BlockWrap>
    </Container>

  )
}

export default PriceFullfilment