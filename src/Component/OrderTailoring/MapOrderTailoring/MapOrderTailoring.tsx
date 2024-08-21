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
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import ReactPlayer from 'react-player';

interface IAboutMainProps {
    infoBlock: IPropsDataPage;
    handlerChangeScreen: any;
}


const MapOrderTailoring: React.FC<IAboutMainProps
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
                                <AboutMainContentContainer>
                            {infoBlock.short_description.length  && <TextTitle type='h6' addClass='text__title-sub'>{infoBlock.short_description}</TextTitle>}
                                    <HeaderSectionFull
                                        title={infoBlock?.title_1}
                                        slogan={infoBlock?.title_2}
                                    />

                                    <Text> {infoBlock.description}</Text>
                                </AboutMainContentContainer>
                            </AboutMainWrapBlock>
                            <AboutMainWrapBlock>
                                <AboutMainImageContainer>
                                    {
                                        infoBlock.videos.length ?
                                            <ReactPlayer
                                                className='react-player'
                                                // light={<Image src={infoBlock.videos[0].url} alt='Thumbnail' />}
                                                url={infoBlock.videos[0].url}
                                                width='100%'
                                                loop={true}
                                                playing={true}
                                                playsinline={true}
                                                muted={true}
                                                onReady={(e: any) => {
                                                    const player = e.getInternalPlayer();
                                                    setTimeout(() => {
                                                        player.setAttribute('muted', 'true');
                                                    }, 1000)
                                                }}
                                            />      
                                            
                                            : infoBlock.images && 
                                            <Image addClass="image__about-main" src={infoBlock.images?.length ? infoBlock.images[0].url : ''} />}
                                </AboutMainImageContainer>
                            </AboutMainWrapBlock>
                           
                        </BlockFlex>

                    {/* </AboutMainContainerWrap> */}
                {/* </AboutMainContainer> */}
            </Container>
        )
    }

export default MapOrderTailoring