import React from "react";
import SliderMainContainer from "../../Component/Main/SliderMain/SliderMainContainer";
import AboutMainComponent from "../../Component/Main/AboutMain/AboutMainComponent";
import FeatureMainComponent from "../../Component/Main/FeatureMain/FeatureMainComponent";
import VideoReviewComponent from "../../Component/Main/VideoReview/VideoReviewComponent";
import HighQualityMainComponent from "../../Component/Main/HighQualityMain/HighQualityMainComponent";
import ExpertMainComponent from "../../Component/Main/ExpertMain/ExpertMainComponent";
import Offset from "../../Views/Offset/Offset";
import ClientSayMainComponent from "../../Component/Main/ClientSayMain/ClientSayMainComponent";
import BlogsMainComponent from "../../Component/Main/BlogsMain/BlogsMainComponent";
import Container from "../../Views/Block/Container";
import Preloader from "../../Views/Preloader/Preloader";
import { IPropsDataPage, IPropsMain } from "../../@types/common";
import Background from "../../Views/Background/Background";
import InfoFindProviderMainComponent from "../../Component/Main/InfoFindProviderMain/InfoFindProviderMainComponent";
import { WithCheckLoadDataPage } from "../../HOC/WithCheckLoadDataPage/WithCheckLoadDataPage";
import BlockWrap from "../../Views/Block/BlolckWrap/BlockWrap";
import Input from "../../Views/Input/Input";
import Text from "../../Views/Text/Text";
import Button from "../../Views/Button/Button";
import { line } from "../../Images";

interface IProps {
    listSection: IPropsDataPage[];
    image: string;
}   

const Main: React.FC<IProps> = ({listSection}:IProps) => {
return (
        <React.Fragment>
            
            <Offset sectionTop />
            <SliderMainContainer dataSection={listSection[0]} />

            {/* temporally, i am thing will better   */}
            <Container size={1400}>

                <BlockWrap col>
                    <Text addClass='text__main-slider-label-track'>Отследить груз</Text>
                    <Offset mb={25} />
                    <BlockWrap>
                        <Input
                            addClass='input__main-track'
                            placeholder='Введите ТН трек номер'
                            formInput={'input'}
                            value={''}
                        />
                        <Button addClass={'button__yellow'} iconSvgLeft={line} iconSvgRight={line} btnYellow onClick={() => { alert('тест клика, нужно решить что делать дальше') }}>
                            <Text>Отследить </Text>
                        </Button>
                    </BlockWrap>
                </BlockWrap>
            </Container>

            <Offset sectionTop />
            <InfoFindProviderMainComponent dataSection={listSection[2]}/>

            <Offset sectionTop>
            <Background />
            </Offset>
            <AboutMainComponent dataSection={listSection[1]} /> 

            <FeatureMainComponent dataSection={listSection[3]} />
            <Offset sectionTop />

             <VideoReviewComponent dataSection={listSection[4]}/>
            <Offset sectionTop />

            <ExpertMainComponent dataSection={listSection[5]}/>
            <Offset sectionTop />

            <ClientSayMainComponent dataSection={listSection[6]} />
            <Offset sectionTop />

            <BlogsMainComponent dataSection={listSection[7]} />
            <Offset sectionTop /> 

            {/*

<HighQualityMainComponent />
<Offset sectionTop />
            <Offset sectionTop />
            */}
        </React.Fragment>
    )
}

export default WithCheckLoadDataPage( Main);