import React, { Component } from 'react'
import AboutSection from './AboutSection'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IStateAboutSection } from '../../../@types/about/about';
import { about_1, about_2, imageFone } from '../../../Images';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}

export class AboutSectionComponent extends Component<WithRouterProps & IProps,IStateAboutSection> {
    state: IStateAboutSection = {
      infoBlock: {
        id: 0,
        title: {
          name: 'Two decades of ',
          slogan: 'architecture',
        },
        subTitle: 'Eraclis Papachristou Architectural Office',
        image1: about_1,
        image2: about_2,
        image_fone: imageFone,
        desc_part_1: 'Eraclis Papachristou Architects is one of the most established architectural offices in Cyprus. This is mainly due to its experimental attitude to construction methods along with innovative design in conjunction with the successful completion of various projects, especially in the last ten years.',
        desc_part_2: 'This is mainly due to its experimental attitude to construction methods along with innovative design in conjunction with the successful completion.',
        button: {
          title: 'About Us',
          locationPath: '/about'
        }
      }
    }
    handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
      if(href){
        return this.props.navigate(href);
    }
  }

  render() {
    return (
      <AboutSection
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}

      />
    )
  }
}

export default withRouter(AboutSectionComponent)