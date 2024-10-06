import { Component } from 'react'
import MapOrderTailoring from './MapOrderTailoring'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';

interface IAboutMainProps {
  dataSection: IPropsDataPage}

export class MapOrderTailoringComponent extends Component<WithRouterProps & IAboutMainProps> {

    handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
      if(href){
        return this.props.navigate(href);
    }
    
  }

  render() {
    return (
      <MapOrderTailoring
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter(MapOrderTailoringComponent)