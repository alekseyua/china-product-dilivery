import React, { Component } from 'react'
import { IStateBurger } from '../../@types/header/header'

import { mainMenu } from '../../config/config.menu'
import NavDesktopMobile from '../NavDesktop/NavDesktopMobile'
import NavBurger from '../Burger/NavBurger'

export class NavFooterContainer extends Component<{},IStateBurger> {
    state: IStateBurger = {
        isOpen: false,
    }
    handlerOpenBurger = () => {
        this.setState(state=>({
            ...state,
            isOpen: !state.isOpen
        }))
    }
  render() {
    return (
      <NavDesktopMobile
        listMenu={mainMenu}
        isFooter
        />
    )
  }
}

export default NavFooterContainer