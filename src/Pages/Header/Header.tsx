import React from "react";
import HeaderTop from "../../Views/Header/HeaderTop";
import HeaderSection from "../../Views/Header/HeaderSection";
import SocialContainer from "../../Views/Header/SocialContainer";
import HeaderBottom from "../../Views/Header/HeaderBottom";
import HeaderBottomWrap from "../../Views/Header/HeaderBottomWrap";
import BlockWrap from "../../Views/Block/BlolckWrap/BlockWrap";
import HeaderLogo from "../../Views/Header/HeaderLogo";
import { IPropsHeader } from "../../@types/header/header";
import NavBurgerContainer from "../../Component/Burger/NavBurgerContainer";
import NavDesktopContainer from "../../Component/NavDesktop/NavDesktopContainer";
import SocialMedia from "../../Component/Chunks/SotialMedia/SocialMedia";
import SocialBox from "../../Views/Header/SocialBox";
import ButtonGoToUp from "../../Component/Chunks/ButtonGoTo/ButtonGoToUp";
import SocialContainerContacts from "../../Views/Header/SocialContainerContacts";
import Container from "../../Views/Block/Container";
import Phone from "../../Component/Chunks/Phone/Phone";
import { IPropsBloksSocial } from "../../@types/common";
import FAQContainer from "../../Component/FAQ/FAQContainer";


interface IPropsHeaderTop {
    phoneNumber: string;
    socialNetwork: IPropsBloksSocial[];
    handlerChangeOpenFAQ: any;
}

const Header: React.FC<IPropsHeader & IPropsHeaderTop> = function ({
    isFixed,
    isBurger,
    isMainPage,
    phoneNumber,
    socialNetwork,
    handlerClickButtonUp,
    handlerChangeOpenFAQ,
}: IPropsHeader & IPropsHeaderTop) {
    // при пролистывании в HeaderBottom нужно добавлять клас sticky > 480px
    return (
        <HeaderSection isBurger={isBurger}> 
            <Container>
                <HeaderTop>
                    {
                        isMainPage? 
                            <SocialContainer>
                                <SocialBox>
                                        <SocialMedia isIcon listMedia={socialNetwork}/>                        
                                </SocialBox>
                                <BlockWrap style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <FAQContainer handlerChangeOpenFAQ={handlerChangeOpenFAQ} />
                                </BlockWrap>
                            </SocialContainer>
                            : 
                            <SocialContainerContacts>
                                <BlockWrap>
                                    <SocialMedia listMedia={socialNetwork}/>
                                </BlockWrap>
                                <BlockWrap style={{justifyContent: 'flex-end', alignItems: 'center'}}>
                                    {/* <Phone isIcon phoneNumber={phoneNumber} /> */}
                                    <FAQContainer handlerChangeOpenFAQ={handlerChangeOpenFAQ }/>
                                </BlockWrap>
                                </SocialContainerContacts>

                    }
                </HeaderTop>
                <HeaderBottom isFixed={isFixed}>
                    <div className="sticky-active">
                        <div className="menu-area">

                            {/* <Container> */}
                                <HeaderBottomWrap>
                                    <BlockWrap>
                                        <HeaderLogo />
                                    </BlockWrap>
                                    {
                                        isBurger ?
                                            <NavBurgerContainer />
                                            :
                                            <NavDesktopContainer isBurger={isBurger}/>
                                    }

                                </HeaderBottomWrap>
                            {/* </Container> */}
                        </div>
                    </div>
                </HeaderBottom>
                <ButtonGoToUp 
                    onClick={handlerClickButtonUp}
                    />
         </Container>
                    {/* {
                        isBurger? 
                            <Offset mt={250} />
                            : null
                    } */}
            </HeaderSection>

    )
}

export default Header;