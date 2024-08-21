import React, { Component } from 'react'
import VideoReview from './VideoReview';
import { IStateVideoReview } from '../../../@types/video-review/video-review';
import { video1 } from '../../../Images';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}

export class VideoReviewComponent extends Component<IProps> {
    
  render() {
    console.log(this.props.dataSection)
    return (
      <VideoReview
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default VideoReviewComponent