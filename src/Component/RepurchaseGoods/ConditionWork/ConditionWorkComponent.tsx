import { Component } from 'react'
import ConditionWork from './ConditionWork'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';

interface IAboutMainProps {
  dataSection: IPropsDataPage}

export class ConditionWorkComponent extends Component<WithRouterProps & IAboutMainProps> {

  render() {
    return (
      <ConditionWork
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default withRouter(ConditionWorkComponent)