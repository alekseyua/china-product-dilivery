import React, { Component } from 'react';
import FAQ from './FAQ';

interface IStateFAQ {
  isOpen: boolean;
}

interface IProps {
  handlerChangeOpenFAQ: any;
}

export class FAQContainer extends Component<IProps, IStateFAQ> {
  state: IStateFAQ = {
        isOpen: false,
    }
  handlerOpenFAQ = () => {
        this.setState(state=>({
            ...state,
            isOpen: !state.isOpen
        }))
        this.props.handlerChangeOpenFAQ(!this.state.isOpen)
        if(!this.state.isOpen){
          document.querySelector('body')?.setAttribute('style', 'overflow-y:hidden;padding-right: 30px')
          document.documentElement.style.setProperty('--scroll-padding', '30px')
        }else{
          document.querySelector('body')?.setAttribute('style', '')
          document.documentElement.style.setProperty('--scroll-padding', '0px')
        }
    }
  render() {
    return (
      <FAQ 
        isOpen = {this.state.isOpen}
        handlerOpenFAQ={this.handlerOpenFAQ}
        />
    )
  }
}

export default FAQContainer;