import React from "react"
import { Outlet } from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer";
import FooterContainer from "../Footer/FooterContainer";

const Layout: React.FC = function (){

    return (
        <React.Fragment>
            <HeaderContainer />
            <Outlet/>
            <FooterContainer />
        </React.Fragment>
    )
}

export default Layout;