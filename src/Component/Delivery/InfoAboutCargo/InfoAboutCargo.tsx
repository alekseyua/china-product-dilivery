import React from 'react'
import Container from '../../../Views/Block/Container'
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import { IPropsBloks, IPropsDataPage } from '../../../@types/common';
import Text from '../../../Views/Text/Text';
import BlockGrid from '../../../Views/Block/BlockGrid/BlockGrid';
import Offset from '../../../Views/Offset/Offset';
import CardDelivery from '../../../Views/Cards/Card-delivery/CardDelivery';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import TextTitle from '../../../Views/Text/TextTitle';

interface IProps {
    infoBlock: IPropsDataPage;
    handlerChangeScreen: any; // TODO: Define type for this function parameter (e.g., ({e, href}: {e: Event, href: string}))
}

const InfoAboutCargo: React.FC<IProps> = ({
    infoBlock,
    handlerChangeScreen,
}: IProps) => {
    return (
        <Container
            size={1400}
            center
        >
            <HeaderSectionFull
                title={infoBlock?.title_1}
                slogan={infoBlock?.title_2}
            />
                <BlockGrid addClass='block__delivery-info-about-cargo-content-container'>
                {
                    infoBlock?.blocks && infoBlock?.blocks.length &&
                    infoBlock?.blocks.map((info: IPropsBloks, index: number): any => {
                        return (
                                <BlockWrap key={info.id} col>
                                    <TextTitle sub center>{info.title_1}</TextTitle>
                                    <Text >{info.description}</Text>
                                </BlockWrap>
                            // <CardDelivery key={card.id} card={card} />
                        )
                    })
                }

            </BlockGrid>
        </Container>
    )
}

export default InfoAboutCargo