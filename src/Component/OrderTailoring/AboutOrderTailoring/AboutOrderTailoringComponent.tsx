import React, { Component } from 'react'
import AboutOrderTailoring from './AboutOrderTailoring'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';

interface IAboutMainProps {
  dataSection: IPropsDataPage}

export class AboutOrderTailoringComponent extends Component<WithRouterProps & IAboutMainProps> {

    handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
      if(href){
        return this.props.navigate(href);
    }
    
  }

  render() {
    // console.log(this.props.dataSection)
    return (
      <AboutOrderTailoring
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter(AboutOrderTailoringComponent)