import React from 'react'

import Container from '../../../Views/Block/Container'
import BlockFlex from '../../../Views/Block/BlockTwoSection/BlockTwoSection';
import Text from '../../../Views/Text/Text';
import TextTitle from '../../../Views/Text/TextTitle';
import { IPropsBloks, IPropsDataPage } from '../../../@types/common';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';

interface IAboutMainProps {
    infoBlock: IPropsDataPage;
}


const InfoMapRepurchaseGoods: React.FC<IAboutMainProps
> = ({
    infoBlock,
}: IAboutMainProps) => {
        return (
            <Container
                size={1400}
                center
            >
                <BlockFlex addClass='block__repurchase-goods-info-map-conrainer'>
                    <BlockFlex addClass='block__repurchase-goods-info-map--section'>
                        {
                            infoBlock.blocks.map((item: IPropsBloks, index: number) => {
                                return (
                                    <BlockWrap data-list={index+1} key={item.id}addClass={`block__repurchase-goods-infomap-item${index % 2? '--right':'--left'}`} >
                                        <TextTitle type='h5'>{item.title_1}</TextTitle>
                                        <Text>{item.description}</Text>
                                    </BlockWrap>
                                )
                            })
                    }
                    </BlockFlex>
                </BlockFlex>
            </Container>
        )
    }

export default InfoMapRepurchaseGoods