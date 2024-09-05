import React from 'react';
import ReactPlayer from 'react-player';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import { IPropsVideoReview } from '../../../@types/video-review/video-review';
import Container from '../../../Views/Block/Container';

const VideoReview: React.FC<IPropsVideoReview> = ({ infoBlock }) => {
  return (
    <Container size={1400}>
      <HeaderSectionFull title={infoBlock?.title_1} slogan={infoBlock?.title_2} />
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
          }, 1000);
        }}
      />
    </Container>
  );
};

export default VideoReview;