import React, { Component } from 'react'
import { IStateExpertMain } from '../../../@types/expert-main/expert-main';
import ExpertMain from './ExpertMain'
import { expert, insta, telega } from '../../../Images';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}

export class ExpertMainComponent extends Component<IProps,IStateExpertMain> {
    state: IStateExpertMain = {
        infoBlock: {
          title: {
            name: {
              main: 'Expert',
              slogan: 'members'
            },
          },       
          cards: [
            {
              id: 0,
              image: expert,
              title: {
                name: 'Andrew Maria',
                profetion: 'Interior Designer',
              },
              socialmedia: [
                {
                  name: 'telegram',
                  icon: telega,
                  locationPath: '/'
                },
                {
                  name: 'instagram',
                  icon: insta,
                  locationPath: '/'
                },
              ],      
            },  
            {
              id: 1,
              image: expert,
              title: {
                name: 'Joseph Carter',
                profetion: '3D Autocad Designer',
              },
              socialmedia: [
                {
                  name: 'telegram',
                  icon: telega,
                  locationPath: '/'
                },
                {
                  name: 'instagram',
                  icon: insta,
                  locationPath: '/'
                },
              ],      
            },  
            {
              id: 2,
              image: expert,
              title: {
                name: 'Kevin Martin',
                profetion: 'Architecture Designer',
              },
              socialmedia: [
                {
                  name: 'telegram',
                  icon: telega,
                  locationPath: '/'
                },
                {
                  name: 'instagram',
                  icon: insta,
                  locationPath: '/'
                },
              ],      
            },  
            {
              id: 3,
              image: expert,
              title: {
                name: 'Jonas Malini',
                profetion: 'Interior Designer',
              },
              socialmedia: [
                {
                  name: 'telegram',
                  icon: telega,
                  locationPath: '/'
                },
                {
                  name: 'instagram',
                  icon: insta,
                  locationPath: '/'
                },
              ],      
            },  
            {
              id: 4,
              image: expert,
              title: {
                name: 'Aiden Samuel',
                profetion: '3D Autocad Designer',
              },
              socialmedia: [
                {
                  name: 'telegram',
                  icon: telega,
                  locationPath: '/'
                },
                {
                  name: 'instagram',
                  icon: insta,
                  locationPath: '/'
                },
              ],      
            },  
          ],
        }
    }
  render() {
    return (
      <ExpertMain
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default ExpertMainComponent