import React, { Component } from 'react'
import OurAdvantage from './OurAdvantage'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';


interface IProps {
  dataSection: IPropsDataPage
}

export class OurAdvantageComponent extends Component<WithRouterProps & IProps> {

  render() {
    return (
      <OurAdvantage
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default withRouter(OurAdvantageComponent)