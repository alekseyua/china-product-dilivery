import React from 'react'
import Container from '../../../Views/Block/Container'
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import { IPropsBloks, IPropsDataPage } from '../../../@types/common';
import BlockGrid from '../../../Views/Block/BlockGrid/BlockGrid';
import Card from '../../../Views/Cards/Card/Card';
import ReactPlayer from 'react-player';

interface IProps {
    infoBlock: IPropsDataPage;
    handlerChangeScreen: any; // TODO: Define type for this function parameter (e.g., ({e, href}: {e: Event, href: string}))
}

const OurAdvantage: React.FC<IProps> = ({
    infoBlock,
    handlerChangeScreen,
}: IProps) => {
    // console.log({infoBlock})
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
                // light={<Image src={infoBlock.videos[0].url} alt='Thumbnail' />}
                url={infoBlock.videos[0].url}
                width='100%'
                // height='700px'
                loop={true}
                playing={true}
                playsinline={true}
                // controls
                muted={true}
                onReady={(e: any) => {
                    const player = e.getInternalPlayer();
                    setTimeout(() => {
                        player.setAttribute('muted', 'true');
                    }, 1000)
                }}
            />      
            {/* <BlockGrid addClass='block__card-container-grid-advantage'>
                {
                    infoBlock?.blocks && infoBlock?.blocks.length?
                    infoBlock?.blocks.map((info: IPropsBloks, index: number): any => {
                        return (
                            <Card 
                                desc={info.description}
                                id={info.id}
                                addClassTitle={'text__stroke-title'}
                            />
                        )
                    })
                    : null
                }

            </BlockGrid> */}
        </Container>
    )
}

export default OurAdvantage