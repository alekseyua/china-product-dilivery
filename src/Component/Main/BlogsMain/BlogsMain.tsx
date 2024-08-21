import React from 'react'

import Container from '../../../Views/Block/Container'
import BlockFlex from '../../../Views/Block/BlockTwoSection/BlockTwoSection';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import Text from '../../../Views/Text/Text';
import Button from '../../../Views/Button/Button';
import { line } from '../../../Images';
import SliderBlogsMain from './SliderBlogsMain';
import TextTitle from '../../../Views/Text/TextTitle';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import { IPropsBlogsMain } from '../../../@types/blogs-main/blogs-main';
import { IPropsDataPage } from '../../../@types/common';

interface IProps{
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
                    // button={{
                    //     name: infoBlock?.button?.title,
                    //     href: infoBlock?.button?.locationPath
                    // }}
                    onClick={handlerChangeScreen}
                />
                
                <SliderBlogsMain listCards={infoBlock?.blocks} onClick={handlerChangeScreen}/>
        </Container>
    )
}

export default BlogsMain