import React from 'react'
import Container from '../../../Views/Block/Container'
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import { IPropsBloks, IPropsDataPage } from '../../../@types/common';
import BlockGrid from '../../../Views/Block/BlockGrid/BlockGrid';
import Card from '../../../Views/Cards/Card/Card';

interface IProps {
    infoBlock: IPropsDataPage;
    handlerChangeScreen: any; // TODO: Define type for this function parameter (e.g., ({e, href}: {e: Event, href: string}))
}

const OurAdvantage: React.FC<IProps> = ({
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
            <BlockGrid addClass='block__card-container-grid-advantage'>
                {
                    infoBlock?.blocks && infoBlock?.blocks.length &&
                    infoBlock?.blocks.map((info: IPropsBloks, index: number): any => {
                        return (
                            <Card 
                                desc={info.description}
                                id={info.id}
                                addClassTitle={'text__stroke-title'}

                            />
                        )
                    })
                }

            </BlockGrid>
        </Container>
    )
}

export default OurAdvantage