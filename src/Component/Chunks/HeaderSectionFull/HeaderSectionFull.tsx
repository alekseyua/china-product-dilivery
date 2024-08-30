import React from 'react'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap'
import BlockFlex from '../../../Views/Block/BlockTwoSection/BlockTwoSection'
import TextTitle from '../../../Views/Text/TextTitle'
import Text from '../../../Views/Text/Text'
import { IPropsHeaderSectionFull } from '../../../@types/chunk/chunk'
import ButtonTransporent from '../ButtonTransporent/ButtonTransporent'

const HeaderSectionFull: React.FC<IPropsHeaderSectionFull> = ({
    title,
    center,
    slogan,
    button,
    onClick,
    location = 'flex-start',
}: IPropsHeaderSectionFull) => {
    return (
        <BlockWrap addClass='block__container-header-section'>
            <BlockFlex start style={{
                flex: '1 1 100%',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: location,
            }}>
                <TextTitle type='h2' addClass='text__header-section--full'>{title} </TextTitle>
                {slogan && <Text addClass='text__stroke-title'>{slogan}</Text>}
            </BlockFlex>

            {button && <BlockFlex end addClass='block__feature-container-title' style={{
                flex: '1 1',
                }}>
                <ButtonTransporent
                        name={button.name}
                        href={button.href}
                        onClick={onClick}
                    />
                </BlockFlex>
            }

        </BlockWrap>
    )
}

export default HeaderSectionFull