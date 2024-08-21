import React, { Component } from 'react'
import IntroductionCards from './IntroductionCards'
import { IStateIntroduction } from '../../../@types/introduction/introduction'
import { introductionDesign, introductionMenagment, introductionPrice } from '../../../Images'
import { IPropsDataPage } from '../../../@types/common'

interface IProps {
  dataSection: IPropsDataPage
}

export class IntroductionCardsComponent extends Component<IProps,IStateIntroduction> {
    state: IStateIntroduction = {
        cards: [
            {
                id: 0,
                title: 'Reasonable Price',
                image: introductionPrice,
                content: 'We see architecture as the composition of all elements that define a particular space and inform the character of a building at the time it is conceived: its structure.',
            },
            {
                id: 1,
                title: 'Exclusive Design',
                image: introductionDesign,
                content: 'We see architecture as the composition of all elements that define a particular space and inform the character of a building at the time it is conceived: its structure.',
            },
            {
                id: 2,
                title: 'Expert Managements',
                image: introductionMenagment,
                content: 'We see architecture as the composition of all elements that define a particular space and inform the character of a building at the time it is conceived: its structure.',
            },
        ]
    }
  render() {
    return (
      <IntroductionCards
        listCards={this.state.cards}
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default IntroductionCardsComponent