import React from 'react'
import Container from '../../../Views/Block/Container'
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import { IPropsBloks, IPropsDataPage } from '../../../@types/common';
import Text from '../../../Views/Text/Text';
import BlockGrid from '../../../Views/Block/BlockGrid/BlockGrid';
import Offset from '../../../Views/Offset/Offset';
import CardDelivery from '../../../Views/Cards/Card-delivery/CardDelivery';

interface IProps {
    infoBlock: IPropsDataPage;
    handlerChangeScreen: any; // TODO: Define type for this function parameter (e.g., ({e, href}: {e: Event, href: string}))
}

const FeatureMain: React.FC<IProps> = ({
    infoBlock,
    handlerChangeScreen,
}: IProps) => {
    return (
        <Container size={1400}>
            <HeaderSectionFull
                title={infoBlock?.title_1}
                slogan={infoBlock?.title_2}
                button={{
                    name: 'Узнать больше',
                    href: '/delivery'
                }}
                onClick={handlerChangeScreen}
            />
            <Text>{infoBlock.description}</Text>
            <Offset mt={15} />
            <BlockGrid addClass='block__delivery-price-card-conrainer'>

                {
                    infoBlock?.blocks && infoBlock?.blocks.length &&
                    infoBlock?.blocks.map((card: IPropsBloks, index: number): any => {
                        return (
                            <CardDelivery key={card.id} card={card} />
                        )
                    })
                }

            </BlockGrid>
        </Container>
    )
}

export default FeatureMain