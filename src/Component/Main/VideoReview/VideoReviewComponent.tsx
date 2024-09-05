import React, { Component } from 'react'
import VideoReview from './VideoReview';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}

export class VideoReviewComponent extends Component<IProps> {
    
  render() {
    return (
      <VideoReview
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default VideoReviewComponent