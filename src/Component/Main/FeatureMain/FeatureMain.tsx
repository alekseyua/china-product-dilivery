import React from 'react'
import Container from '../../../Views/Block/Container'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import SliderFeatureMain from './SliderFeatureMain';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
    infoBlock: IPropsDataPage;
    handlerChangeScreen: any; // TODO: Define type for this function parameter (e.g., ({e, href}: {e: Event, href: string}))
}

const FeatureMain: React.FC<IProps> = ({
    infoBlock,
    handlerChangeScreen,
}: IProps) => {
    return (
        <Container
            addClass='container__feature-main'
            size={1400}
        >
            <HeaderSectionFull 
                title={infoBlock?.title_1}
                slogan={infoBlock?.title_2}
                onClick={handlerChangeScreen}
            />
            <BlockWrap> 
                <SliderFeatureMain listCards={infoBlock?.blocks} />
            </BlockWrap>
        </Container>
    )
}

export default FeatureMain