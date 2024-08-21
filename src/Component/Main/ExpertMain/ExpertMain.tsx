import React from 'react'
import { IPropsExpertMain } from '../../../@types/expert-main/expert-main';
import Container from '../../../Views/Block/Container'
import SliderExpertMain from './SliderExpertMain';
import HeaderSliderCenter from '../../Chunks/HeaderSliderCenter/HeaderSliderCenter';
import Offset from '../../../Views/Offset/Offset';
import { IPropsDataPage } from '../../../@types/common';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';

interface IProps {
    infoBlock: IPropsDataPage
}
const ExpertMain: React.FC<IProps> = ({
    infoBlock,
}: IProps) => {
    return (
        <Container size={1400}
        >
            <HeaderSectionFull
                title={infoBlock?.title_1}
                slogan={infoBlock?.title_2}
                location={'center'}   
            />
            <SliderExpertMain listCards={infoBlock?.blocks} countSlider={4}/>

        </Container>
    )
}

export default ExpertMain