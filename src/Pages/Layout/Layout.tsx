import React from "react"
import { Outlet } from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer";
import FooterContainer from "../Footer/FooterContainer";
import FAQ from "../../Component/Chunks/FAQ/FAQ";
import { IFAQ } from "../../@types/common";


interface IProps {
    isOpenFAQ: boolean;
    dataFAQ: IFAQ[],
    handlerChangeOpenFAQ: any;
    isOpenItemFAQ: number[];
    handlerOpenAnswer: any;
}

const Layout: React.FC<IProps> = function ({ 
    dataFAQ,
    isOpenFAQ,
    isOpenItemFAQ,
    handlerOpenAnswer,
    handlerChangeOpenFAQ,
}:IProps){

    return (
        <React.Fragment>
            <HeaderContainer handlerChangeOpenFAQ={handlerChangeOpenFAQ } />
            {isOpenFAQ && <FAQ list={dataFAQ} isOpenItemFAQ={isOpenItemFAQ} handlerOpenAnswer ={handlerOpenAnswer } /> }
            <Outlet/>
            <FooterContainer />
        </React.Fragment>
    )
}

export default Layout;