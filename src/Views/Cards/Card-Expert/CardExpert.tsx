import React from 'react'
import { IPropsCard } from '../../../@types/cards'
import BlockWrap from '../../Block/BlolckWrap/BlockWrap'
import TextTitle from '../../Text/TextTitle'
import SocialMedia from '../../../Component/Chunks/SotialMedia/SocialMedia'
import Image from '../../Image/Image'
import { IPropsBloks, IPropsDataPage } from '../../../@types/common'

interface IProps {
  card: IPropsBloks,
  titleandcocial?: boolean | undefined & IPropsDataPage['blocks']
}

const CardExpert: React.FC<IProps> = ({ card, titleandcocial }: IProps) => {
  return (<BlockWrap col addClass='block__expert-card-container'>
    <BlockWrap>
      <TextTitle addClass='text__expert-sub-title' sub >{card.title_2}</TextTitle>
    </BlockWrap>
    <BlockWrap addClass={titleandcocial? 'block__expert-card-container-title-row' : 'block__expert-card-container-title'}>
      <BlockWrap>
        <TextTitle addClass='text__expert-title' type={'h3'}>{card.title_1}</TextTitle>
      </BlockWrap>
      <BlockWrap addClass='block__expert-card-media-container'>
        <SocialMedia isIcon listMedia={card.social_networks} location='flex-start'/>
      </BlockWrap>
    </BlockWrap>
    <BlockWrap addClass='block__expert-card-image-container'>
      <Image src={card.images.length? card.images[0]?.url : 'not photo'} />
    </BlockWrap>
  </BlockWrap>)
}

export default CardExpert