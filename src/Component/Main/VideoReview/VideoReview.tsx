import React from 'react'

import Container from '../../../Views/Block/Container'
import { IPropsVideoReview } from '../../../@types/video-review/video-review';
import ReactPlayer from 'react-player'
import Image from '../../../Views/Image/Image';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import Text from '../../../Views/Text/Text';
import TextTitle from '../../../Views/Text/TextTitle';
import CountUp from 'react-countup';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';


const VideoReview:React.FC<IPropsVideoReview> = ({
    infoBlock,

}:IPropsVideoReview) => {
  return (
    <Container
        addClass='container__video-review-main'
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
                setTimeout(()=>{
                    player.setAttribute('muted', 'true');
                },1000)
            }}
        />      
      </Container>
  )
}

export default VideoReview