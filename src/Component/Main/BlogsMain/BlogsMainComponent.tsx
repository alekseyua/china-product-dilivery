import React, { Component } from 'react'

import BlogsMain from './BlogsMain'
import { WithRouterProps } from '../../../@types/hoc/hoc';
import withRouter from '../../../HOC/withRouter/withRouter';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}

export class BlogsMainComponent extends Component<WithRouterProps & IProps> {

    handlerChangeScreen = ({e, href}:{e:Event, href: string}) : any => {
      if(href){
        if(href.includes('https')){
          window.open(href);
          return;
        }
        return this.props.navigate(href);
      }
    }

  render() {
    return (
      <BlogsMain
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter(BlogsMainComponent)