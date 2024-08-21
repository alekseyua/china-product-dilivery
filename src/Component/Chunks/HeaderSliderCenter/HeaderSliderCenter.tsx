import React from 'react'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap'
import BlockFlex from '../../../Views/Block/BlockTwoSection/BlockTwoSection'
import TextTitle from '../../../Views/Text/TextTitle'
import Text from '../../../Views/Text/Text'
import Button from '../../../Views/Button/Button'
import { IPropsHeaderSliderCenter } from '../../../@types/chunk/chunk'
import { line } from '../../../Images'

const HeaderSliderCenter: React.FC<IPropsHeaderSliderCenter> = ({
    title,
    slogan,
}:IPropsHeaderSliderCenter) => {
    return (
        <BlockWrap addClass='block__container-header-section'>
            <BlockFlex start style={{                
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <TextTitle type='h2' addClass='text__header-section--full'>{title}</TextTitle>
                <Text addClass='text__stroke-title'>{slogan}</Text>
            </BlockFlex>            
        </BlockWrap>
    )
}

export default HeaderSliderCenter;