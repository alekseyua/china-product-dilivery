import React, { Component } from 'react'
import { IStateBurger } from '../../@types/header/header'
import NavBurger from './NavBurger'
import { mainMenu } from '../../config/config.menu'
import NavDesktopMobile from '../NavDesktop/NavDesktopMobile'

export class NavBurgerContainer extends Component<{},IStateBurger> {
    state: IStateBurger = {
        isOpen: false,
    }
    handlerOpenBurger = () => {
        this.setState(state=>({
            ...state,
            isOpen: !state.isOpen
        }))
        if(!this.state.isOpen){
          document.querySelector('body')?.setAttribute('style', 'overflow:hidden;padding-right:35px;')
        }else{
          document.querySelector('body')?.setAttribute('style', '')
        }
    }
  render() {
    return (
      <NavBurger 
        isOpen = {this.state.isOpen}
        handlerOpenBurger={this.handlerOpenBurger}
        listMenu={mainMenu}
        />
    )
  }
}

export default NavBurgerContainer