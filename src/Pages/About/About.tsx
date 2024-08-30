import React from "react";
import Container from "../../Views/Block/Container";
import AboutImageSectionComponent from "../../Component/About/About/AboutSectionComponent";
import Breadcrumbs from "../../Component/Chunks/Breadcrumbs/Breadcrumbs";
import Offset from "../../Views/Offset/Offset";
import Background from "../../Views/Background/Background";
import { IPropsDataPage } from "../../@types/common";
import { WithCheckLoadDataPage } from "../../HOC/WithCheckLoadDataPage/WithCheckLoadDataPage";

interface IProps {
    listSection: IPropsDataPage[];
    image: string;
}   

const About: React.FC<IProps> = function ({
    listSection,
    image,
}: IProps){

    return (
        <Container>
            <Offset mt={100} />
            <Breadcrumbs image={image}/>
            <Offset sectionTop>
            <Background />
            </Offset>

            <AboutImageSectionComponent dataSection={listSection[0]} />
            <Offset sectionTop />
            
        </Container>
    )
}

export default WithCheckLoadDataPage( About);