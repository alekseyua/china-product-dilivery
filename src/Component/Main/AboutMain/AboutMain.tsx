import React from 'react'

import Container from '../../../Views/Block/Container'
import Image from '../../../Views/Image/Image'
import Button from '../../../Views/Button/Button';
import AboutMainImageContainer from '../../../Views/AboutMain/AboutMainImageContainer';
import AboutMainWrapBlock from '../../../Views/AboutMain/AboutMainWrapBlock';
import BlockFlex from '../../../Views/Block/BlockTwoSection/BlockTwoSection';
import AboutMainContentContainer from '../../../Views/AboutMain/AboutMainContentContainer';
import Text from '../../../Views/Text/Text';
import TextTitle from '../../../Views/Text/TextTitle';
import { line } from '../../../Images';
import { IPropsDataPage } from '../../../@types/common';
import Offset from '../../../Views/Offset/Offset';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';

interface IAboutMainProps {
    infoBlock: IPropsDataPage;
    handlerChangeScreen: any;
}


const AboutMain: React.FC<IAboutMainProps
> = ({
    infoBlock,
    handlerChangeScreen,
}: IAboutMainProps) => {
        return (
            <Container
                addClass='container__about-main'
            >
                {/* <AboutMainContainer> */}
                    {/* <AboutMainContainerWrap> */}
                        <BlockFlex addClass='block__about-main-conrainer'>
                            <AboutMainWrapBlock>
                                <AboutMainImageContainer>
                                    {infoBlock.images && <Image addClass="image__about-main" src={infoBlock.images?.length ? infoBlock.images[0].url : ''} />}
                                </AboutMainImageContainer>
                            </AboutMainWrapBlock>
                            <AboutMainWrapBlock>
                                <AboutMainContentContainer>
                                    <TextTitle type='h6' addClass='text__title-sub'>{infoBlock.short_description}</TextTitle>
                                    <HeaderSectionFull
                                        title={infoBlock?.title_1}
                                        slogan={infoBlock?.title_2}
                                    />

                                    <Text> {infoBlock.description }</Text>
                                    <Button addClass={'button__about-us'} href={'/about'} onClick={handlerChangeScreen} iconSvgLeft={line} iconSvgRight={line} btnYellow>
                                        <Text>{'О нас'}</Text>
                                    </Button>
                                </AboutMainContentContainer>
                            </AboutMainWrapBlock>
                        </BlockFlex>

                    {/* </AboutMainContainerWrap> */}
                {/* </AboutMainContainer> */}
            </Container>
        )
    }

export default AboutMain