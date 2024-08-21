import React, { Component } from 'react'
import PriceDelivery from './PriceDelivery'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';


interface IProps {
  dataSection: IPropsDataPage
}

export class PriceDeliveryComponent extends Component<WithRouterProps & IProps> {

    handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
      if(href){
        return this.props.navigate(href);
      }
    }
  render() {
    return (
      <PriceDelivery
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter(PriceDeliveryComponent)