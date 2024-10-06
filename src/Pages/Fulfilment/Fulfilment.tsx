import React from "react";
import Container from "../../Views/Block/Container";
import Breadcrumbs from "../../Component/Chunks/Breadcrumbs/Breadcrumbs";
import Offset from "../../Views/Offset/Offset";
import { IPropsDataPage } from "../../@types/common";
import { WithCheckLoadDataPage } from "../../HOC/WithCheckLoadDataPage/WithCheckLoadDataPage";
import PriceFullfilmentComponent from "../../Component/Fullfilment/PriceFullfilment/PriceFullfilmentComponent";
import { AboutStorageContainer } from "../../Component/Delivery/AboutStorage/AboutStorageComponent";
import IntroductionCardsComponent from "../../Component/Fullfilment/IntroductionCard/IntroductionCardsComponent";
import SloganComponent from "../../Component/Fullfilment/Slogan/SloganComponent";

interface IProps {
    listSection: IPropsDataPage[];
    image: string;
}
const Fulfilment: React.FC<IProps> = function ({
    listSection,
    image,
}: IProps) {
    return (
        <Container>
            <Offset sectionTop />
            <Breadcrumbs image={image} />
            <Offset sectionTop />
            <SloganComponent dataSection={listSection[4]} />
            <Offset sectionTop />
            <AboutStorageContainer dataSection={listSection[2]} />
            <Offset sectionTop />
            <PriceFullfilmentComponent dataSection={listSection[0]} />
            <IntroductionCardsComponent dataSection={listSection[3]} />
            <Offset sectionTop />
        </Container>
    )
}

export default WithCheckLoadDataPage(Fulfilment);