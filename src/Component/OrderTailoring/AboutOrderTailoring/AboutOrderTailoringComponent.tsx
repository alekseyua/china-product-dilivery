import { Component } from 'react'
import AboutOrderTailoring from './AboutOrderTailoring'
import { IPropsDataPage } from '../../../@types/common';
import { connectStoreon } from 'storeon/react';
import { IFooter } from '../../../@types/footer/footer';

interface IAboutMainProps {
  dataSection: IPropsDataPage;
  dataHeaderFooter: IFooter;
}

interface IState {
  isOpenSocial: boolean;
}

export class AboutOrderTailoringComponent extends Component<IAboutMainProps, IState> {
  state: IState = {
    isOpenSocial: false,
  }

  handlerOpenSocial = () => {
    this.setState(state =>({
      ...state,
      isOpenSocial:!state.isOpenSocial,
    }))
  }

  render() {
    return (
      <AboutOrderTailoring
        infoBlock={this.props.dataSection}
        isOpenSocial={this.state.isOpenSocial}
        listSocialNetwork={this.props?.dataHeaderFooter?.footer.sections[0].blocks[0].social_networks}
        handlerOpenSocial={this.handlerOpenSocial}

      />
    )
  }
}

export default connectStoreon( 
  'dataHeaderFooter',
  AboutOrderTailoringComponent
)