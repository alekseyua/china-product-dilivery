import React from "react"
import { Outlet } from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer";
import FooterContainer from "../Footer/FooterContainer";
import FAQ from "../../Component/Chunks/FAQ/FAQ";


interface IProps {
    isOpenFAQ: boolean;
    handlerChangeOpenFAQ: any;
}

const Layout: React.FC<IProps> = function ({ 
    isOpenFAQ, 
    handlerChangeOpenFAQ 
}:IProps){

    return (
        <React.Fragment>
            <HeaderContainer handlerChangeOpenFAQ={handlerChangeOpenFAQ } />
            { isOpenFAQ? <FAQ list={[]} /> : null }
            <Outlet/>
            <FooterContainer />
        </React.Fragment>
    )
}

export default Layout;