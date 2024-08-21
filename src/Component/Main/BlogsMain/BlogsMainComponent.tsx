import React, { Component } from 'react'

import BlogsMain from './BlogsMain'
import { feature1, feature2, feature3, location } from '../../../Images';
import { IStateBlogsMain } from '../../../@types/blogs-main/blogs-main';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import withRouter from '../../../HOC/withRouter/withRouter';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}

export class BlogsMainComponent extends Component<WithRouterProps & IProps,IStateBlogsMain> {
    state: IStateBlogsMain = {
        infoBlock: {
          title: {
            name: {
              main: 'Our Latest',
              slogan: 'Blogs'
            },
         },
         button: {
           title: 'View The Blogs',
           locationPath: '/'
         },
         cards: [
           {
             id: 0,
             image: feature1,
             title: {
               name: 'Architecture - February 15, 2023',
               locationPath: '/',
              },
              desc: 'Morbi condimentum congue dui, elementum maximus augue porttitor a. Quisque volutpat et dui at fringilla. Integer sed justo quis lacus sodales porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
              button: {
                title: 'Read More',
                locationPath: '/'
              },
            },         
           {
             id: 1,
             image: feature1,
             title: {
               name: 'Architecture - February 15, 2023',
               locationPath: '/',
              },
              desc: 'Morbi condimentum congue dui, elementum maximus augue porttitor a. Quisque volutpat et dui at fringilla. Integer sed justo quis lacus sodales porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
              button: {
                title: 'Read More',
                locationPath: '/'
              },
            },         
           {
             id: 2,
             image: feature1,
             title: {
               name: 'Architecture - February 15, 2023',
               locationPath: '/',
              },
              desc: 'Morbi condimentum congue dui, elementum maximus augue porttitor a. Quisque volutpat et dui at fringilla. Integer sed justo quis lacus sodales porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
              button: {
                title: 'Read More',
                locationPath: '/'
              },
            },         
           {
             id: 3,
             image: feature1,
             title: {
               name: 'Architecture - February 15, 2023',
               locationPath: '/',
              },
              desc: 'Morbi condimentum congue dui, elementum maximus augue porttitor a. Quisque volutpat et dui at fringilla. Integer sed justo quis lacus sodales porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
              button: {
                title: 'Read More',
                locationPath: '/'
              },
            },         
          ],
        }
    }
    handlerChangeScreen = ({e, href}:{e:Event, href: string}) : any => {
      if(href){
        if(href.includes('https')){
          window.open(href);
          return;
        }
        return this.props.navigate(href);
      }
    }

  render() {
    return (
      <BlogsMain
        infoBlock={this.props.dataSection}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default withRouter(BlogsMainComponent)