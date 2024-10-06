import React from 'react'
import Container from '../../../Views/Block/Container'
import Text from '../../../Views/Text/Text';
import TextTitle from '../../../Views/Text/TextTitle';
import { IPropsBloks, IPropsDataPage } from '../../../@types/common';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import BlockGrid from '../../../Views/Block/BlockGrid/BlockGrid';
import Line from '../../../Views/Line/Line';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';

interface IAboutMainProps {
    infoBlock: IPropsDataPage;
}


const ConditionWork: React.FC<IAboutMainProps
> = ({
    infoBlock,
}: IAboutMainProps) => {

        return (
            <Container
                size={1400}
                center
            >
                <HeaderSectionFull
                    title={infoBlock?.title_1}
                    slogan={infoBlock?.title_2}
                    location='center'
                />
                <BlockGrid addClass='block__container-grid-two-three'>
                    {
                        infoBlock?.blocks && infoBlock?.blocks.length &&
                        infoBlock?.blocks.map((info: IPropsBloks, index: number): any => {
                            return (
                                <BlockWrap col key={info.id} addClass={(index === 0 || index === 1) ? 'block__card-container--allotted' : 'block__card-container'}>
                                    <TextTitle type='h4' style={{
                                        minHeight: info.title_1 !== '<p>&nbsp;</p>' ? 70 : 0
                                    }}>{info.title_1}</TextTitle>
                                    <Line/>
                                            <Text
                                                style={{
                                            minHeight: info.short_description !== '<p>&nbsp;</p>' ? 100 : 0
                                                }}
                                            >{info.short_description}</Text>
                                    <Line thick/>
                                    <Text addClass='style-table-card'>{info.description}</Text>
                               </BlockWrap>
                            )
                        })
                    }
                </BlockGrid>
            </Container>
        )
    }

export default ConditionWork