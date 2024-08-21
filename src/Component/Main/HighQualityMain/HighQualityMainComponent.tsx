import React, { Component } from 'react'
import { IStateHighQualityMain } from '../../../@types/feature-main/feature-main';
import HighQualityMain from './HighQualityMain'
import { architecture, feature1, feature2, feature3, location, servise1 } from '../../../Images';
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';

export class HighQualityMainComponent extends Component<WithRouterProps,IStateHighQualityMain> {
    state: IStateHighQualityMain = {
        infoBlock: {
          title: {
            name: {
              main: 'High-quality architectural',
              slogan: 'services'
            },
            slogan: '',
          },
          button: {
            title: 'View all Services',
            locationPath: '/'
          },         
          cards: [
            {
              id: 0,
              image: servise1,
              title: {
                tag: 'h3',
                name: 'Architecture',
                icon: architecture,
                desc: 'We see architecture as the composition of all elements that define a particular space and inform the character of a building.',
                button: {
                  name: 'View Details',
                  locationPath: '/'
                },      
              },
            },   
            {
              id: 1,
              image: servise1,
              title: {
                tag: 'h3',
                name: 'Interior Design',
                icon: architecture,
                desc: 'In Order architecture as the composition of all elements that define a particular space and inform the character of a interior.',
                button: {
                  name: 'View Details',
                  locationPath: '/'
                },      
              },
            },   
            {
              id: 2,
              image: servise1,
              title: {
                tag: 'h3',
                name: 'Urban Interventions',
                icon: architecture,
                desc: 'The Urban architecture as the composition of all elements that define a particular space and inform the character of into.',
                button: {
                  name: 'View Details',
                  locationPath: '/'
                },      
              },
            },   
            {
              id: 3,
                image: feature1,
                title: {
                  tag: 'h3',
                  name: 'Landscape Design',
                  icon: architecture,
                  desc: 'The Best architecture as composition of all elements that define a particular space and inform the character of a Landscape.',
                  button: {
                    name: 'View Details',
                    locationPath: '/'
                  },      
                },
              },
            {
              id: 4,
              image: feature1,
              title: {
                tag: 'h3',
                name: 'Interdisciple Entity',
                icon: architecture,
                desc: 'You see architecture as the composition of all elements that define a particular space and inform the character of a Gowring.',
                button: {
                  name: 'View Details',
                  locationPath: '/'
                },      
              },
            },   
          ],
        }
    }

    handlerChangeScreen = ({e, href}:{e:Event, href: string}) => {
      if(href){
        return this.props.navigate(href);
      }
    }

  render() {
    return (
      <HighQualityMain
        infoBlock={this.state.infoBlock}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter( HighQualityMainComponent)