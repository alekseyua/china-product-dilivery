import { Component } from 'react'
import InfoMapRepurchaseGoods from './InfoMapRepurchaseGoods'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';

interface IAboutMainProps {
  dataSection: IPropsDataPage}

export class InfoMapRepurchaseGoodsComponent extends Component<WithRouterProps & IAboutMainProps> {
  render() {
    return (
      <InfoMapRepurchaseGoods
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default withRouter(InfoMapRepurchaseGoodsComponent)