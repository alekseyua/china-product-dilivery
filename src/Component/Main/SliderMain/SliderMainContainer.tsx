import { Component } from 'react'
import SliderMain from './SliderMain'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}

export class SliderMainContainer extends Component<WithRouterProps & IProps> {
  render() {
    return (
      <SliderMain
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default withRouter(SliderMainContainer)