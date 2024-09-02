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
import Offset from '../../../Views/Offset/Offset';

interface IAboutMainProps {
    infoBlock: IPropsDataPage;
    handlerDonwload: any;
}


const InfoRepurchaseGoods: React.FC<IAboutMainProps
> = ({
    infoBlock,
    handlerDonwload,
}: IAboutMainProps) => {
        return (
            <Container
                size={1400}
                center
            >
                        <BlockFlex addClass='block__repurchase-goods-info-conrainer'>
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
                                            <Image src={infoBlock.images?.length ? infoBlock.images[0].url : ''} />}
                            <AboutMainWrapBlock>
                                <AboutMainContentContainer>
                                    <TextTitle type='h6' addClass='text__title-sub'>{infoBlock.short_description}</TextTitle>
                                    <HeaderSectionFull
                                        title={infoBlock?.title_1}
                                        slogan={infoBlock?.title_2}
                                        location='center'
                                    />

                                    <Text> {infoBlock.description }</Text>
                                    <Offset mb={20} />
                            <Button addClass={'button__full-yellow'} onClick={handlerDonwload} iconSvgLeft={line} iconSvgRight={line} btnYellow>
                                        <Text>{'Скачать бланк заказа'}</Text>
                                    </Button>
                                </AboutMainContentContainer>
                            </AboutMainWrapBlock>
                        </BlockFlex>
            </Container>
        )
    }

export default InfoRepurchaseGoods