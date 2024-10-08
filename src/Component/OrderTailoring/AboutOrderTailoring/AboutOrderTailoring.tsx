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
import { IPropsBloksSocial, IPropsDataPage } from '../../../@types/common';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import ReactPlayer from 'react-player';
import SocialMedia from '../../Chunks/SotialMedia/SocialMedia';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';

interface IAboutMainProps {
    infoBlock: IPropsDataPage;
    handlerOpenSocial: any;
    isOpenSocial: boolean;
    listSocialNetwork: IPropsBloksSocial[]
}


const AboutOrderTailoring: React.FC<IAboutMainProps
> = ({
    infoBlock,
    isOpenSocial,
    listSocialNetwork,
    handlerOpenSocial,
}: IAboutMainProps) => {
    console.log(infoBlock.blocks[0].social_networks)
        return (
            <Container
                size={1400}
                center
            >
                        <BlockFlex addClass='block__about-main-conrainer'>
                            <AboutMainWrapBlock>
                                <AboutMainImageContainer>
                                    {
                                        infoBlock.videos.length ?
                                            <ReactPlayer
                                                className='react-player'
                                                // light={<Image src={infoBlock.videos[0].url} alt='Thumbnail' />}
                                                url={infoBlock.videos[0].url}
                                                width='100%'
                                                // height='700px'
                                                loop={true}
                                                playing={true}
                                                playsinline={true}
                                                // controls
                                                light={<img src={infoBlock.images[0].url} style={{width: '80%', height: '80%'}} alt='Thumbnail' />}

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
                            <AboutMainWrapBlock>
                                <AboutMainContentContainer>
                                    <TextTitle type='h6' addClass='text__title-sub'>{infoBlock.short_description}</TextTitle>
                                    <HeaderSectionFull
                                        title={infoBlock?.title_1}
                                        slogan={infoBlock?.title_2}
                                    />

                                    <Text> {infoBlock.description }</Text>
                                    <BlockWrap addClass={isOpenSocial ? 'block__order-tail-action-social--active' : 'block__order-tail-action-social'}>
                                        <SocialMedia  isIcon listMedia={infoBlock.blocks[0].social_networks}/>
                                    </BlockWrap>
                                    <Button addClass={'button__about-us'} onClick={handlerOpenSocial} iconSvgLeft={line} iconSvgRight={line} btnYellow>
                                        <Text>{'заказать расчет'}</Text>
                                    </Button>
                                </AboutMainContentContainer>
                            </AboutMainWrapBlock>
                        </BlockFlex>
            </Container>
        )
    }

export default AboutOrderTailoring