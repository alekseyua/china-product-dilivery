import React, { Component } from 'react'
import InfoRepurchaseGoods from './InfoRepurchaseGoods'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';

interface IAboutMainProps {
  dataSection: IPropsDataPage}

export class InfoRepurchaseGoodsComponent extends Component<WithRouterProps & IAboutMainProps> {

    handlerDonwload = ({e, href}:{e:Event, href: string}) => {
      alert('Need file from admin service')
    
  }

  render() {
    // console.log(this.props.dataSection)
    return (
      <InfoRepurchaseGoods
        infoBlock={this.props.dataSection}
        handlerDonwload={this.handlerDonwload}
      />
    )
  }
}

export default withRouter(InfoRepurchaseGoodsComponent)