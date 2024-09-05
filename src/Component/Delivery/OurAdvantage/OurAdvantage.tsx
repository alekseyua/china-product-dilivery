import React from 'react'
import Container from '../../../Views/Block/Container'
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import ReactPlayer from 'react-player';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
    infoBlock: IPropsDataPage;
}

const OurAdvantage: React.FC<IProps> = ({
    infoBlock,
}: IProps) => {
    return (
        <Container
            size={1400}
            center
        >
            <HeaderSectionFull
                title={infoBlock?.title_1}
                slogan={infoBlock?.title_2}
            />
            <ReactPlayer
                className='react-player'
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
        </Container>
    )
}

export default OurAdvantage