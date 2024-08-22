import React from "react";
import Container from "../../Views/Block/Container";
import Breadcrumbs from "../../Component/Chunks/Breadcrumbs/Breadcrumbs";
import Offset from "../../Views/Offset/Offset";
import { IPropsDataPage } from "../../@types/common";
import InfoRepurchaseGoodsComponent from "../../Component/RepurchaseGoods/InfoRepurchaseGoods/InfoRepurchaseGoodsComponent";
import { WithCheckLoadDataPage } from "../../HOC/WithCheckLoadDataPage/WithCheckLoadDataPage";
import InfoMapRepurchaseGoodsComponent from "../../Component/RepurchaseGoods/InfoMapRepurchaseGoods /InfoMapRepurchaseGoodsComponent";
import ConditionWorkComponent from "../../Component/RepurchaseGoods/ConditionWork/ConditionWorkComponent";

interface IProps {
    listSection: IPropsDataPage[];
    image: string;
}


const RepurchaseOfGoods: React.FC<IProps> = function ({ listSection,
    image, }:IProps){

    return (
        <Container>
            <Breadcrumbs image={image} />
            <Offset sectionTop />
            <InfoRepurchaseGoodsComponent dataSection={listSection[0]} />
            <Offset sectionTop />
            <InfoMapRepurchaseGoodsComponent dataSection={listSection[1]} />
            <Offset sectionTop />
            <ConditionWorkComponent dataSection={listSection[2]} />
            <Offset sectionTop />


            
        </Container>
    )
}

export default WithCheckLoadDataPage( RepurchaseOfGoods);