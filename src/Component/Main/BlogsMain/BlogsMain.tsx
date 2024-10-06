import React from 'react'

import Container from '../../../Views/Block/Container'
import SliderBlogsMain from './SliderBlogsMain';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
    infoBlock: IPropsDataPage;
    handlerChangeScreen: any;
}

const BlogsMain: React.FC<IProps> = ({
    infoBlock,
    handlerChangeScreen,
}: IProps) => {
    return (
        <Container size={1400}>
            <HeaderSectionFull
                title={infoBlock?.title_1}
                slogan={infoBlock?.title_2}
                onClick={handlerChangeScreen}
            />
            <SliderBlogsMain listCards={infoBlock?.blocks} onClick={handlerChangeScreen} />
        </Container>
    )
}

export default BlogsMain