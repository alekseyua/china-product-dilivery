import React from "react";
import BlockWrap from "../../Views/Block/BlolckWrap/BlockWrap";
import Container from "../../Views/Block/Container";
import Line from "../../Views/Line/Line";
import Text from "../../Views/Text/Text";
import { Link } from "react-router-dom";
import HeaderLogo from "../../Views/Header/HeaderLogo";
import Offset from "../../Views/Offset/Offset";
import TextTitle from "../../Views/Text/TextTitle";
import SocialMedia from "../../Component/Chunks/SotialMedia/SocialMedia";
import IconSvg from "../../Views/Icon/IconSvg";
import { location, mail, phone } from "../../Images";
import NavFooterContainer from "../../Component/NavFooter/NavFooterContainer";

const Footer: React.FC = function () {

    return (
        <footer>
            <Container size={1400}>
                <BlockWrap col>

                            <BlockWrap addClass="block__footer-container">
                                <BlockWrap addClass="block__footer-container-inner-left" col>
                                        <BlockWrap>
                                            <HeaderLogo />
                                        </BlockWrap>
                                        <Offset mb={33}/>
                                        <BlockWrap col>
                                                <Text addClass="text__footer-desc">Conveniently develop impactful value without next-generation applications. Progressively strategize ubiquitous initiatives after go forward resources.</Text>
                                                <Offset mt={20} />
                                                <TextTitle type="h6"  addClass="text__footer-sotial-media">Social Network:</TextTitle>
                                                <SocialMedia listMedia={[]}/>
                                        </BlockWrap>
                                </BlockWrap>
                                <BlockWrap addClass="block__footer-container-inner-center">
                                    <div className="widget widget_nav_menu footer-widget style2">
                                    <TextTitle type="h3" addClass="text__footer-title">Services</TextTitle>
                                    <Offset mt={10} />
                                    <NavFooterContainer />                                           
                                    <Offset mt={40} />

                                    </div>
                                </BlockWrap>
                                <BlockWrap addClass="block__footer-container-inner-right" col>
                                        <TextTitle type="h3" addClass="text__footer-title">Contact Now</TextTitle>
                                            <BlockWrap addClass="block__footer-wrap-item-contact">
                                                <IconSvg src={location} />
                                                <BlockWrap col>
                                                    <TextTitle>Office Address</TextTitle>
                                                    <Text addClass="text__footer-desc-address">#482 2 Henerala Street, Ukraine</Text>
                                                </BlockWrap>
                                            </BlockWrap>
                                            <Offset mt={10} />
                                            <BlockWrap addClass="block__footer-wrap-item-contact">
                                                <IconSvg src={phone} style={{width: 20}}/>

                                                <BlockWrap col>
                                                    <TextTitle>Phone Number</TextTitle>
                                                    <Link to="tel:+11234567890" ><Text addClass="text__footer-desc-address" style={{textWrap: 'nowrap'}}>+(1) 123 456 7890</Text></Link>
                                                </BlockWrap>
                                            </BlockWrap>
                                            <Offset mt={10} />
                                            <BlockWrap addClass="block__footer-wrap-item-contact">
                                                <IconSvg src={mail} style={{width: 20}}/>

                                                <BlockWrap col>
                                                    <TextTitle >Email Address</TextTitle>
                                                    <Link to="mailto:info@artraz.com" ><Text addClass="text__footer-desc-address">info@artraz.com</Text></Link>
                                                </BlockWrap>
                                            </BlockWrap>
                                </BlockWrap>
                            </BlockWrap>
                </BlockWrap>
            </Container>
            <Line />
                    <BlockWrap addClass="block__footer-copyright-container">
                            <Text addClass="text__footer-copyright"> Copyright By © <Link to="/">Artraz</Link> - 2024</Text>
                    </BlockWrap>
        </footer>

    )
}

export default Footer;