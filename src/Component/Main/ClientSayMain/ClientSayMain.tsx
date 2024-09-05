import React from 'react'
import Container from '../../../Views/Block/Container'
import SliderClientSayMain from './SliderClientSayMain';
import HeaderSliderCenter from '../../Chunks/HeaderSliderCenter/HeaderSliderCenter';
import Offset from '../../../Views/Offset/Offset';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
    infoBlock: IPropsDataPage
}
const ClientSayMain: React.FC<IProps> = ({
    infoBlock,
}: IProps) => {
    return (
        <Container size={1400}>
            <HeaderSliderCenter
                title={infoBlock?.title_1}
                slogan={infoBlock?.title_2}
            />
            <Offset mb={25} />
            <SliderClientSayMain listCards={infoBlock?.blocks} countSlide={2} />
        </Container>
    )
}

export default ClientSayMain