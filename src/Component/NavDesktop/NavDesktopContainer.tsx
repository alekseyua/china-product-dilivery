import React, { Component } from 'react';
import { IPropsMobileContainer, IStateBurger } from '../../@types/header/header';
import NavDesktopMobile from './NavDesktopMobile';
import { mainMenu } from '../../config/config.menu';

export class NavDesktopContainer extends Component<IPropsMobileContainer,{}> {
  render() {
    return (
      <NavDesktopMobile 
        listMenu={mainMenu}
      />
    )
  }
}

export default NavDesktopContainer