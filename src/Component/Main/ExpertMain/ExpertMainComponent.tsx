import React, { Component } from 'react'
import ExpertMain from './ExpertMain'
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}

export class ExpertMainComponent extends Component<IProps> {

  render() {
    return (
      <ExpertMain
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default ExpertMainComponent