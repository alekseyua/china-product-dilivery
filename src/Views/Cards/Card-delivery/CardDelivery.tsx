import React from 'react'
import BlockWrap from '../../Block/BlolckWrap/BlockWrap'
import Image from '../../Image/Image'
import Offset from '../../Offset/Offset'
import TextTitle from '../../Text/TextTitle'
import { Link } from 'react-router-dom'
import Text from '../../Text/Text'
import ButtonTransporent from '../../../Component/Chunks/ButtonTransporent/ButtonTransporent'

interface IPropsCard {
    card: {
        id: number,
        images: {url: string}[],
        title_1: string,
        title_2: string,
        description: string,
    }     
}

const CardDelivery = ({card
}: IPropsCard) => {
  return (
      <BlockWrap col
          style={{ marginRight: 20, maxWidth: 320 }}
      >
          <Image src={card.images[0].url} alt="project image" />
          <Offset mt={15} />
          <BlockWrap style={{ alignItems: 'center', justifyContent: 'space-between', padding: `0 20px` }}>

              <BlockWrap col addClass='block__delivery-price-card-conrainer-desc'>
                  <Link to={'/'}>
                      <TextTitle type='h3'>
                          {card.title_1}
                      </TextTitle>
                  </Link>
                  <Text>{card.title_2}</Text>
                  <Text>{card.description}</Text>
              </BlockWrap>
          </BlockWrap>
      </BlockWrap>
  )
}

export default CardDelivery