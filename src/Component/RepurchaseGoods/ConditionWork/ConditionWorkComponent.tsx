import React, { Component } from 'react'
import ConditionWork from './ConditionWork'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';

interface IAboutMainProps {
  dataSection: IPropsDataPage}

export class ConditionWorkComponent extends Component<WithRouterProps & IAboutMainProps> {

    handlerDonwload = ({e, href}:{e:Event, href: string}) => {
      alert('Need file from admin service')
    
  }

  render() {
    return (
      <ConditionWork
        infoBlock={this.props.dataSection}
        handlerDonwload={this.handlerDonwload}
      />
    )
  }
}

export default withRouter(ConditionWorkComponent)