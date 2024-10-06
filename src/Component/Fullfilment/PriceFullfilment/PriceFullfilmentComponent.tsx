import { Component } from 'react'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';
import PriceFullfilment from './PriceFullfilment';

interface IProps {
  dataSection: IPropsDataPage
}

export class PriceFullfilmentComponent extends Component<WithRouterProps & IProps> {

  render() {
    return (
      <PriceFullfilment
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default withRouter(PriceFullfilmentComponent)