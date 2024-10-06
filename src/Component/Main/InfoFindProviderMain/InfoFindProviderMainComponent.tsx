import { Component } from 'react'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';
import InfoFindProviderMain from './InfoFindProviderMain';

interface IAboutMainProps {
  dataSection: IPropsDataPage
}

export class InfoFindProviderMainComponent extends Component<WithRouterProps & IAboutMainProps> {

    handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
      if(href){
        return this.props.navigate(href);
    }
    
  }

  render() {
    return (
      <InfoFindProviderMain
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter(InfoFindProviderMainComponent)