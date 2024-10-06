import { Component } from 'react'
import { IStateBurger } from '../../@types/header/header'
import NavBurger from './NavBurger'
import { mainMenu } from '../../config/config.menu'

export class NavBurgerContainer extends Component<{}, IStateBurger> {
  state: IStateBurger = {
    isOpen: false,
  }
  handlerOpenBurger = () => {
    this.setState(state => ({
      ...state,
      isOpen: !state.isOpen
    }))
    if (!this.state.isOpen) {
      document.querySelector('body')?.setAttribute('style', 'overflow:hidden;')
    } else {
      document.querySelector('body')?.setAttribute('style', '')
    }
  }

  handlerItemBurger = () => {
    this.setState(state => ({
      ...state,
      isOpen: false
    }))
    document.querySelector('body')?.setAttribute('style', '')
    document.documentElement.style.setProperty('--scroll-padding', '0px')
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <NavBurger
        isOpen={this.state.isOpen}
        handlerOpenBurger={this.handlerOpenBurger}
        listMenu={mainMenu}
        handlerItemBurger={this.handlerItemBurger}
      />
    )
  }
}

export default NavBurgerContainer