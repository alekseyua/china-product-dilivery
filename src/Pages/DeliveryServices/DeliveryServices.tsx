import React from "react";
import Container from "../../Views/Block/Container";
import Breadcrumbs from "../../Component/Chunks/Breadcrumbs/Breadcrumbs";
import Offset from "../../Views/Offset/Offset";
import { IPropsDataPage } from "../../@types/common";
import { WithCheckLoadDataPage } from "../../HOC/WithCheckLoadDataPage/WithCheckLoadDataPage";
import InfoDeliveryComponent from "../../Component/Delivery/InfoDelivery/InfoDeliveryComponent";
import PriceDeliveryComponent from "../../Component/Delivery/PriceDelivery/PriceDeliveryComponent";
import InfoAboutCargoComponent from "../../Component/Delivery/InfoAboutCargo/InfoAboutCargoComponent";
import OurAdvantageComponent from "../../Component/Delivery/OurAdvantage/OurAdvantageComponent";
import CalculateComponent from "../../Component/Delivery/Calculate/CalculateComponent";

interface IProps {
    listSection: IPropsDataPage[];
    image: string;
}

const DeliveryServices: React.FC<IProps> = function ({
    listSection,
    image,
}:IProps){
    console.log({ listSection })
    return (
        <Container>
            <Offset sectionTop />
            <Breadcrumbs image={image} />
            <Offset sectionTop />

            <InfoDeliveryComponent dataSection={listSection[0]} />
            <Offset sectionTop />
            
            <PriceDeliveryComponent dataSection={listSection[1]} />
            <Offset sectionTop />
            
            <InfoAboutCargoComponent dataSection={listSection[2]} />
            <Offset sectionTop />

            <OurAdvantageComponent dataSection={listSection[3]} />
            <Offset sectionTop />
            
            <CalculateComponent dataSection={listSection[4]} />
            <Offset sectionTop />

    </Container>
    )
}

export default WithCheckLoadDataPage( DeliveryServices);