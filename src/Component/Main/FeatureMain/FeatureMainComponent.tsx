import React, { Component } from 'react'
import FeatureMain from './FeatureMain'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';


interface IFeatureProps {
  dataSection: IPropsDataPage
}

export class FeatureMainComponent extends Component<WithRouterProps & IFeatureProps> {

    handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
      if(href){
        return this.props.navigate(href);
      }
    }
  render() {
    return (
      <FeatureMain
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter( FeatureMainComponent)