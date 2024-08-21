import React, { Component } from 'react'
import SliderMain from './SliderMain'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}


export class SliderMainContainer extends Component<WithRouterProps & IProps> {
  handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
    if(href){
      return this.props.navigate(href);
    }
  }
  render() {
    return (
      <SliderMain 
        infoBlock={this.props.dataSection}
        onClick={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter( SliderMainContainer)