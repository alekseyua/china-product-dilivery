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
import Container from "../../Views/Block/Container";
import { IPropsBloksSocial } from "../../@types/common";
import FAQContainer from "../../Component/FAQ/FAQContainer";


interface IPropsHeaderTop {
    phoneNumber: string;
    listSocialNetwork: IPropsBloksSocial[];
    handlerChangeOpenFAQ: any;
}

const Header: React.FC<IPropsHeader & IPropsHeaderTop> = function ({
    isFixed,
    isBurger,
    listSocialNetwork,
    handlerClickButtonUp,
    handlerChangeOpenFAQ,
}: IPropsHeader & IPropsHeaderTop) {
    return (
        <HeaderSection isBurger={isBurger}>
            <Container>
                <HeaderTop>
                    <SocialContainer>
                        <SocialBox>
                            <SocialMedia isIcon listMedia={listSocialNetwork} />
                        </SocialBox>
                        <BlockWrap style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                            <FAQContainer handlerChangeOpenFAQ={handlerChangeOpenFAQ} />
                        </BlockWrap>
                    </SocialContainer>
                </HeaderTop>
                <HeaderBottom isFixed={isFixed}>
                    <div className="sticky-active">
                        <div className="menu-area">
                            <HeaderBottomWrap>
                                <BlockWrap>
                                    <HeaderLogo />
                                </BlockWrap>
                                {
                                    isBurger ?
                                        <NavBurgerContainer />
                                        :
                                        <NavDesktopContainer isBurger={isBurger} />
                                }

                            </HeaderBottomWrap>
                        </div>
                    </div>
                </HeaderBottom>
                {isFixed && <ButtonGoToUp
                    onClick={handlerClickButtonUp}
                />}
            </Container>
        </HeaderSection>

    )
}

export default Header;