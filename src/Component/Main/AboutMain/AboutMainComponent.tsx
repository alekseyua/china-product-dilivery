import React, { Component } from 'react'
import { IStateAboutMain } from '../../../@types/about-main/about-main';
import AboutMain from './AboutMain'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { about_3_1 } from '../../../Images';
import { getLocalStore } from '../../../helpers/helpers';
import { IPropsDataPage, IPropsMain } from '../../../@types/common';

interface IAboutMainProps {
  dataSection: IPropsDataPage}

export class AboutMainComponent extends Component<WithRouterProps & IAboutMainProps,
        IStateAboutMain> {
    state: IStateAboutMain = {
        infoBlock: {
          id: 0,
          title: {
            name: 'About',
            slogan: 'Artraz',
          },
          subTitle: 'Eraclis Papachristou Architectural Office',
          image: about_3_1,
          desc_part_1: 'Eraclis Papachristou Architects is one of the most established architectural offices in Cyprus. This is mainly due to its experimental attitude to construction methods along with innovative design in conjunction with the successful completion of various projects, especially in the last ten years.',
          desc_part_2: '',
          button: {
            title: 'About Us',
            locationPath: '/about'
          }
        }
    }

    // componentWillUpdate(nextProps: Readonly<WithRouterProps & { dataSection: { 'id': string; 'name': string; 'description': string; 'image': string; 'video': string; }; }>, nextState: Readonly<IStateAboutMain>, nextContext: any): void {
      
    // }

    // componentDidMount(): void {
      
    // // }
    // // componentDidUpdate(prevProps: Readonly<WithRouterProps & IAboutMainProps>, prevState: Readonly<IStateAboutMain>, snapshot?: any): void {
    //   console.log(this.props.dataSection.id)  
    //   // if(prevProps.dataSection.id !== this.props.dataSection.id){
    //     this.setState(state=>({
    //       ...state,
    //       infoBlock:{
    //         ...state.infoBlock,
    //         title: {
    //           ...state.infoBlock.title,
    //           name: this.props.dataSection.title_1,
    //           slogan: this.props.dataSection.title_2
    //         },
    //         // image: this.props.dataSection.image,
    //         desc_part_1: this.props.dataSection.description,
    //       },
    //     }))
    //   // }
      
    // }

    handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
      if(href){
        return this.props.navigate(href);
    }
    
  }

  render() {
    // console.log(this.props.dataSection)
    return (
      <AboutMain
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter(AboutMainComponent)