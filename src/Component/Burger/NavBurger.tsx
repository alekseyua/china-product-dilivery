import React from 'react'
import NavBurgerWrapContainer from '../../Views/Nav/NavBurgerWrapContainer';
import Burger from '../../Views/Nav/Burger';
import { INavBurger } from '../../@types/header/header';
import HeaderLogo from '../../Views/Header/HeaderLogo';
import NavDesktopMobile from '../NavDesktop/NavDesktopMobile';

const NavBurger:React.FC<INavBurger> = ({
  isOpen,
  listMenu,
  handlerOpenBurger,
  handlerItemBurger,
}:INavBurger) => {
  return (
    <React.Fragment>
      <Burger 
        onClick={handlerOpenBurger}
      />
      <NavBurgerWrapContainer
        isOpen={isOpen}
      >
        <HeaderLogo isBurger />
        <NavDesktopMobile
          listMenu={listMenu}
          handlerItemBurger={handlerItemBurger}
          isMobile
        />
      </NavBurgerWrapContainer>

    </React.Fragment>
  )
}

export default NavBurger