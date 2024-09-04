import React from 'react'
import BlockWrap from '../../Views/Block/BlolckWrap/BlockWrap'
import NavContainer from '../../Views/Nav/NavContainer'
import NavMainMenuContainer from '../../Views/Nav/NavMainMenuContainer'
import NavMainMenuItem from '../../Views/Nav/NavMainMenuItem'
import { Link } from 'react-router-dom'
import NavMainSubMenuWrap from '../../Views/Nav/NavMainSubMenuWrap'
import NavMainSubMenuContainer from '../../Views/Nav/NavMainSubMenuContainer'
import NavMainSubMenuItem from '../../Views/Nav/NavMainSubMenuItem'
import { IHeaderMenu } from '../../@types/header/header'


const NavDesktopMobile:React.FC<IHeaderMenu> = ({
  listMenu,
  isMobile,
  isFooter,
  isIcon,
handlerItemBurger,
}:IHeaderMenu) => {
  return (
    // <BlockWrap style={{ width: '100%' }}>
    <NavContainer>
        <NavMainMenuContainer isMobile={isMobile} isFooter={isFooter}>
            {
                listMenu && listMenu.map((elMenu: any) => {
                    return (
                        <NavMainMenuItem key={elMenu.id} submenu={!!elMenu?.submenu.length} isMobile={isMobile} isIcon={isIcon} >
                            <Link to={elMenu.path} onClick={handlerItemBurger}>{elMenu.title}</Link>
                            {
                                
                                !isFooter && elMenu?.submenu.length ?
                                    <NavMainSubMenuWrap isMobile={isMobile}>
                                        <NavMainSubMenuContainer isMobile={isMobile}>
                                            {
                                                elMenu?.submenu.map((elSubMenu: any) => {
                                                    return (
                                                        <NavMainSubMenuItem
                                                            key={elSubMenu.id}
                                                            isMobile={isMobile}
                                                        ><Link to={elSubMenu.path} onClick={handlerItemBurger}>{elSubMenu.title}</Link></NavMainSubMenuItem>
                                                    )
                                                })
                                            }
                                        </NavMainSubMenuContainer>
                                    </NavMainSubMenuWrap>
                                    : null

                            }
                        </NavMainMenuItem>
                    )
                })
            }

        </NavMainMenuContainer>
    </NavContainer>
// </BlockWrap>
  )
}

export default NavDesktopMobile