import React from 'react'
import Container from '../../../Views/Block/Container'
import TextTitle from '../../../Views/Text/TextTitle';
import { IPropsBloks, IPropsDataPage } from '../../../@types/common';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import Card from '../../../Views/Cards/Card/Card';
import BlockGrid from '../../../Views/Block/BlockGrid/BlockGrid';

interface IAboutMainProps {
    infoBlock: IPropsDataPage;
    handlerChangeScreen: any;
}


const InfoFindProviderMain: React.FC<IAboutMainProps
> = ({
    infoBlock,
    handlerChangeScreen,
}: IAboutMainProps) => {
        return (
            <Container
                addClass='container__info-find-provider'
                size={1400}
                center
            >
                <HeaderSectionFull
                    title={infoBlock?.title_1}
                    slogan={infoBlock?.title_2}
                    location='center'
                    // button={{
                    //     name: 'infoBlock?.button_1',
                    //     href: '/'
                    // }}
                    // onClick={handlerChangeScreen}

                />
                <BlockWrap>
                    <TextTitle type='h6' addClass='text__title-sub' style={{textAlign: 'center', width: '100%'}}>{infoBlock.short_description}</TextTitle>
                </BlockWrap>

                <BlockGrid addClass='block__card-container-grid'>
                    {
                        infoBlock.blocks && infoBlock.blocks.length && infoBlock.blocks.map((item: IPropsBloks) => {
                        console.log({item})

                            return (
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    title={{
                                        name: item.title_1,
                                        locationPath: ''
                                    }}
                                    desc={item.description}
                                    short_description={item.short_description}
                                    shotText='2'
                                />

                            )
                        })
                    }
                </BlockGrid>

            </Container>
        )
    }

export default InfoFindProviderMain