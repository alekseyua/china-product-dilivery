import { Component } from 'react'
import IntroductionCards from './IntroductionCards'
import { IPropsDataPage } from '../../../@types/common'

interface IProps {
  dataSection: IPropsDataPage
}

export class IntroductionCardsComponent extends Component<IProps> {
  render() {
    return (
      <IntroductionCards
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default IntroductionCardsComponent