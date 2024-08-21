import React from 'react'

import Container from '../../../Views/Block/Container'
import Image from '../../../Views/Image/Image'
import Button from '../../../Views/Button/Button';
import AboutMainImageContainer from '../../../Views/AboutMain/AboutMainImageContainer';
import AboutMainWrapBlock from '../../../Views/AboutMain/AboutMainWrapBlock';
import BlockFlex from '../../../Views/Block/BlockTwoSection/BlockTwoSection';
import AboutMainContentContainer from '../../../Views/AboutMain/AboutMainContentContainer';
import Text from '../../../Views/Text/Text';
import TextTitle from '../../../Views/Text/TextTitle';
import { line } from '../../../Images';
import { IPropsDataPage } from '../../../@types/common';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import ReactPlayer from 'react-player';
import Offset from '../../../Views/Offset/Offset';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';

interface IAboutMainProps {
    infoBlock: IPropsDataPage;
    handlerDonwload: any;
}


const InfoMapRepurchaseGoods: React.FC<IAboutMainProps
> = ({
    infoBlock,
    handlerDonwload,
}: IAboutMainProps) => {
        return (
            <Container
                addClass='container__about-main'
            >
                <BlockFlex addClass='block__repurchase-goods-info-map-conrainer'>
                    <BlockFlex addClass='block__repurchase-goods-info-map--section'>
                        {
                            infoBlock.blocks.map( (item: any, index: number) => {
                                console.log({item},index % 2)
                                return (
                                    <BlockWrap key={item.id}addClass={`block__repurchase-goods-infomap-item${index % 2? '--right':'--left'}`} >
                                        {index}
                                    </BlockWrap>
                                )
                            })
                    }
                    </BlockFlex>
                    {/* <BlockFlex addClass='block__repurchase-goods-info-map--right'>
2
                    </BlockFlex> */}
                </BlockFlex>
            </Container>
        )
    }

export default InfoMapRepurchaseGoods