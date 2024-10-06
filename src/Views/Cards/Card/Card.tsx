import BlockWrap from '../../Block/BlolckWrap/BlockWrap'
import Image from '../../Image/Image'
import Offset from '../../Offset/Offset'
import TextTitle from '../../Text/TextTitle'
import { Link } from 'react-router-dom'
import Text from '../../Text/Text'
import ButtonTransporent from '../../../Component/Chunks/ButtonTransporent/ButtonTransporent'
import IconSvg from '../../Icon/IconSvg'

interface IPropsCard {
    id: number,
    image?: string,
    title?: {
        name: string,
        locationPath: string
    },
    desc: string,
    short_description?: string,
    button?: {
        title: string,
        locationPath: string
    };
    onClick?: any;
    addClassTitle?: string;
    shotText?: string;
    style?: object;
    svgIcon?: string;
}

const Card = ({
    id,
    desc,
    style,
    image,
    title,
    button,
    svgIcon,
    onClick,
    shotText,
    addClassTitle,
    short_description,
}: IPropsCard) => {
    return (
        <BlockWrap
            key={id}
            addClass='block__card-container'
            style={style}
        >
            {
                image ?
                    <BlockWrap>
                        <Image src={image} />
                    </BlockWrap>
                    : svgIcon ?
                        <IconSvg src={svgIcon} addClass='icon__card' />
                        : null
            }

            <Offset mt={20} style={{ padding: `0px 40px` }}>
                {
                    title ?
                        <Link to={title.locationPath}>
                            <TextTitle addClass={addClassTitle ? addClassTitle : 'text__card-title'}>
                                {title.name}
                            </TextTitle>
                        </Link>
                        : null
                }
                <Offset mb={10} />
                <Text addClass='text__title-sub'>{short_description}</Text>
                <Text
                    addClass='text__blogs-main-desc'
                    style={{
                        'display': '-webkit-box',
                        WebkitTextStroke: 'vertical',
                        WebkitLineClamp: `${shotText ? shotText : ''}`,

                    }}
                >{desc}</Text>

                {
                    button && button?.title ?
                        <>
                            <Offset mb={10} />
                            <BlockWrap>
                                <ButtonTransporent
                                    name={button.title}
                                    href={button.locationPath}
                                    onClick={onClick}
                                />
                            </BlockWrap>
                        </>
                        : null
                }
            </Offset>
        </BlockWrap>
    )
}

export default Card