import React from "react";
import Container from "../../Views/Block/Container";
import Breadcrumbs from "../../Component/Chunks/Breadcrumbs/Breadcrumbs";
import Offset from "../../Views/Offset/Offset";

const PaymentToChina: React.FC = function (){

    return (
        <Container>
        <Breadcrumbs />
        <Offset sectionTop />
    </Container>
    )
}

export default PaymentToChina;