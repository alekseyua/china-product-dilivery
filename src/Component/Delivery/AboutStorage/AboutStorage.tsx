import React from 'react'

import Container from '../../../Views/Block/Container'
import Image from '../../../Views/Image/Image'
import AboutMainImageContainer from '../../../Views/AboutMain/AboutMainImageContainer';
import AboutMainWrapBlock from '../../../Views/AboutMain/AboutMainWrapBlock';
import BlockFlex from '../../../Views/Block/BlockTwoSection/BlockTwoSection';
import AboutMainContentContainer from '../../../Views/AboutMain/AboutMainContentContainer';
import Text from '../../../Views/Text/Text';
import TextTitle from '../../../Views/Text/TextTitle';
import { IPropsDataPage } from '../../../@types/common';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';

interface IAboutMainProps {
    infoBlock: IPropsDataPage;
    handlerChangeScreen: any;
}


const AboutStorage: React.FC<IAboutMainProps
> = ({
    infoBlock,
    handlerChangeScreen,
}: IAboutMainProps) => {
        return (
            <Container
                size={1400}
                center
            >
                        <BlockFlex addClass='block__about-main-conrainer'>
                            <AboutMainWrapBlock>
                                <AboutMainImageContainer>
                                    {infoBlock.images && <Image addClass="image__about-main" src={infoBlock.images[0].url} />}
                                </AboutMainImageContainer>
                            </AboutMainWrapBlock>
                            <AboutMainWrapBlock>
                                <AboutMainContentContainer>
                                    <TextTitle type='h6' addClass='text__title-sub'>{infoBlock?.short_description}</TextTitle>
                                    <HeaderSectionFull
                                        title={infoBlock?.title_1}
                                        slogan={infoBlock?.title_2}
                                    />

                                    <Text> {infoBlock.description }</Text>
                                </AboutMainContentContainer>
                            </AboutMainWrapBlock>
                        </BlockFlex>
            </Container>
        )
    }

export default AboutStorage