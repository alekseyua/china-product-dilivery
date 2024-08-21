import React, { Component } from 'react'
import Slogan from './Slogan'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';


interface IProps {
  dataSection: IPropsDataPage
}

export class SloganComponent extends Component<WithRouterProps & IProps> {

    handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
      if(href){
        return this.props.navigate(href);
      }
    }
  render() {
    return (
      <Slogan
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter(SloganComponent)