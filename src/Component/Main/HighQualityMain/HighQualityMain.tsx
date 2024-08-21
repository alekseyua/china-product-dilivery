import React from 'react'
import { IPropsHighQualityMain } from '../../../@types/feature-main/feature-main';
import Container from '../../../Views/Block/Container'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import SliderHighQualityMain from './SliderHighQualityMain';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';


const HighQualityMain: React.FC<IPropsHighQualityMain> = ({
    infoBlock,
    handlerChangeScreen,
}: IPropsHighQualityMain) => {
    return (
        <Container
            addClass='container__high-quality-main'
        >
            <HeaderSectionFull
                title={infoBlock?.title?.name?.main}
                slogan={infoBlock?.title?.name?.slogan}
                button={{
                    name: infoBlock?.button?.title,
                    href: infoBlock?.button?.locationPath
                }}
                onClick={handlerChangeScreen}
            />
            <BlockWrap>
                <SliderHighQualityMain listCards={infoBlock?.cards} onClick={handlerChangeScreen}/>
            </BlockWrap>

        </Container>
    )
}

export default HighQualityMain