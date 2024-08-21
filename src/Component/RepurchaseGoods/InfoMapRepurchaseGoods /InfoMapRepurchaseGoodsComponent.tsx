import React, { Component } from 'react'
import InfoMapRepurchaseGoods from './InfoMapRepurchaseGoods'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';

interface IAboutMainProps {
  dataSection: IPropsDataPage}

export class InfoMapRepurchaseGoodsComponent extends Component<WithRouterProps & IAboutMainProps> {

    handlerDonwload = ({e, href}:{e:Event, href: string}) => {
      alert('Need file from admin service')
    
  }

  render() {
    // console.log(this.props.dataSection)
    return (
      <InfoMapRepurchaseGoods
        infoBlock={this.props.dataSection}
        handlerDonwload={this.handlerDonwload}
      />
    )
  }
}

export default withRouter(InfoMapRepurchaseGoodsComponent)