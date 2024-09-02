import React from "react";
import Container from "../../Views/Block/Container";
import Breadcrumbs from "../../Component/Chunks/Breadcrumbs/Breadcrumbs";
import Offset from "../../Views/Offset/Offset";
import { IPropsDataPage } from "../../@types/common";
import ContactFormMainContainer from "../../Component/OrderTailoring/ContactFormMain/ContactFormMainContainer";
import { WithCheckLoadDataPage } from "../../HOC/WithCheckLoadDataPage/WithCheckLoadDataPage";
import AboutOrderTailoringComponent from "../../Component/OrderTailoring/AboutOrderTailoring/AboutOrderTailoringComponent";
import MapOrderTailoringComponent from "../../Component/OrderTailoring/MapOrderTailoring/MapOrderTailoringComponent";

interface IProps {
    listSection: IPropsDataPage[];
    image: string;
}

const OrderTailoring: React.FC<IProps> = function ({
    listSection,
    image,
 }: IProps){
    return (
        <Container>
            <Breadcrumbs image={image} />
            <Offset sectionTop />
            {/* <ContactFormMainContainer dataSection={listSection[0]} />/
            <Offset sectionTop /> */}
            
            <AboutOrderTailoringComponent dataSection={listSection[1]}/>
            <Offset sectionTop />
            
            <MapOrderTailoringComponent dataSection={listSection[2]}/>
            <Offset sectionTop />


    </Container>
    )
}

export default WithCheckLoadDataPage( OrderTailoring);