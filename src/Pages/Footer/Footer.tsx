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
import { IPropsDataPage } from "../../@types/common";
import { WithCheckLoadDataPage } from "../../HOC/WithCheckLoadDataPage/WithCheckLoadDataPage";
import Phone from "../../Component/Chunks/Phone/Phone";

interface IProps {
    listSection: IPropsDataPage[];
    image: string;
}

const Footer: React.FC<IProps> = function ({
    listSection,
    image,
}: IProps) {
    return (
        <footer>
            <Container size={1400}>
                <BlockWrap col>

                    <BlockWrap addClass="block__footer-container">

                        <BlockWrap addClass="block__footer-container-inner-left" col>
                            <BlockWrap>
                                <HeaderLogo />
                            </BlockWrap>
                            <Offset mb={33} />
                            <BlockWrap col>
                                {/* <Text addClass="text__footer-desc">Conveniently develop impactful value without next-generation applications. Progressively strategize ubiquitous initiatives after go forward resources.</Text> */}
                                <TextTitle sub>
                                    {
                                        listSection.length &&
                                        listSection[0].short_description
                                    }
                                </TextTitle>
                                {
                                    listSection.length ? <Line /> : null}
                                <Text addClass="text__footer-desc">
                                    {
                                        listSection.length &&
                                        listSection[0].description
                                    }
                                </Text>
                                <Offset mt={20} />
                                <TextTitle type="h6" addClass="text__footer-sotial-media">Социальные сети:</TextTitle>
                                <SocialMedia isIcon listMedia={listSection[0]?.blocks[0]?.social_networks} location='flex-start'/>
                            </BlockWrap>
                        </BlockWrap>

                        <BlockWrap addClass="block__footer-container-inner-center">
                            <div className="widget widget_nav_menu footer-widget style2">
                                <TextTitle type="h3" addClass="text__footer-title">
                                    {
                                        listSection.length &&
                                        listSection[1].title_1
                                    }
                                </TextTitle>
                                <Offset mt={10} />
                                <NavFooterContainer />
                                <Offset mt={40} />

                            </div>
                        </BlockWrap>

                        <BlockWrap addClass="block__footer-container-inner-right" col>
                            <TextTitle type="h3" addClass="text__footer-title">{
                                listSection.length &&
                                listSection[2].title_1
                            }</TextTitle>
                            <BlockWrap addClass="block__footer-wrap-item-contact">
                                <IconSvg src={location} />
                                <BlockWrap col>
                                    <TextTitle>
                                        {
                                            listSection.length &&
                                            listSection[2].blocks[0].short_description
                                        }
                                    </TextTitle>
                                    <Text addClass="text__footer-desc-address">
                                        {
                                            listSection.length &&
                                            listSection[2].blocks[0].description
                                        }
                                    </Text>
                                </BlockWrap>
                            </BlockWrap>
                            <Offset mt={10} />
                            <BlockWrap addClass="block__footer-wrap-item-contact">
                                <IconSvg src={phone} style={{ width: 20 }} />

                                <BlockWrap col>
                                    <TextTitle>
                                        {
                                            listSection.length &&
                                            listSection[2].blocks[1].short_description
                                        }
                                    </TextTitle>
                                    <Phone phoneNumber={listSection[2].blocks[1].description} />
                                </BlockWrap>
                            </BlockWrap>
                            <Offset mt={10} />
                            <BlockWrap addClass="block__footer-wrap-item-contact">
                                <IconSvg src={mail} style={{ width: 20 }} />

                                <BlockWrap col>
                                    <TextTitle >
                                        {
                                            listSection.length &&
                                            listSection[2].blocks[2].short_description
                                        }
                                    </TextTitle>
                                    <Link to={`mailto::${listSection.length && listSection[2].blocks[2].description.replace(/^<p>/g, '').replace(/<\/p>$/g, '')} `} ><Text addClass="text__footer-desc-address">{listSection.length && listSection[2].blocks[2].description}</Text></Link>
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

export default (Footer);