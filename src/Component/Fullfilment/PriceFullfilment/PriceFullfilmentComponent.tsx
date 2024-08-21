import React, { Component } from 'react'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';
import PriceFullfilment from './PriceFullfilment';

interface IProps {
  dataSection: IPropsDataPage
}

export class PriceFullfilmentComponent extends Component<WithRouterProps & IProps> {
    handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
      if(href){
        return this.props.navigate(href);
    }
  }

  render() {
    return (
      <PriceFullfilment
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}

      />
    )
  }
}

export default withRouter(PriceFullfilmentComponent)