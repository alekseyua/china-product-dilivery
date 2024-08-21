import React from 'react'
import BlockWrap from '../../Block/BlolckWrap/BlockWrap'
import Text from '../../Text/Text'
import Offset from '../../Offset/Offset'
import BlockTwoSection from '../../Block/BlockTwoSection/BlockTwoSection'
import Image from '../../Image/Image'
import TextTitle from '../../Text/TextTitle'
import IconSvg from '../../Icon/IconSvg'
import { IPropsClientSayCard } from '../../../@types/cards'

const ClientSay: React.FC<IPropsClientSayCard> = ({
    card,
}: IPropsClientSayCard) => {
    return (
        <BlockWrap key={card.id} col addClass='block__client-card-container'>
            <BlockWrap>
                <Text>
                    {card.desc}
                </Text>
            </BlockWrap>
            <Offset mb={40} />
            <BlockTwoSection addClass='block__client-card-container-self-info'>
                <BlockTwoSection row>
                    <Image addClass='image__client-avatar' src={card.infoClient.image} />
                    <BlockWrap addClass='block__client-card-self-info' col>
                        <TextTitle type='h5'>{card.infoClient.name}</TextTitle>
                        <TextTitle sub>{card.infoClient.profetion}</TextTitle>
                    </BlockWrap>
                </BlockTwoSection>
                <BlockWrap addClass='block__client-card-self-info-icon'>
                    <IconSvg src={card.icon} />
                </BlockWrap>
            </BlockTwoSection>
        </BlockWrap>

    )
}

export default ClientSay