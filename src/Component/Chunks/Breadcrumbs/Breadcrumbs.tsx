import React from 'react'
import TextTitle from '../../../Views/Text/TextTitle'
import Image from '../../../Views/Image/Image'
import { aboutPage } from '../../../Images'
import BreadcrumbsContainer from '../../../Views/Breadcrumbs/BreadcrumbsContainer'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs'
import { Link } from 'react-router-dom'
import Arrow from '../../../Views/Arrow/Arrow'
import { getTitleFromUrl } from '../../../helpers/helpers'
import Offset from '../../../Views/Offset/Offset'

interface IProps{
    image?: string
}

const Breadcrumbs:React.FC<IProps> = ({
    image,
}:IProps) => {
    const breadcrumbs = useReactRouterBreadcrumbs();
    return (
        <BreadcrumbsContainer>
        <Image src={image? image : aboutPage} style={{maxHeight: 650}}/>
        <BlockWrap addClass='block__breadcrumbs-container-title'>
            <TextTitle type='h1' addClass='text__breadcrumbs-title'>{breadcrumbs.map(({ breadcrumb }: any, index) => breadcrumbs.length === index+1 && getTitleFromUrl(breadcrumb))}</TextTitle>
            <Offset mb={10} />
            <TextTitle addClass='text__breadcrumbs-links'>{breadcrumbs.map(({ breadcrumb }: any, index) =>{ 
                return <Link key={breadcrumb.key} to={breadcrumb.key}>{getTitleFromUrl(breadcrumb)} 
                    {breadcrumbs.length !== index+1 && <Arrow  addClass='arrow__braedcrumb'/> }
                </Link>
            })}</TextTitle>


        </BlockWrap>

    </BreadcrumbsContainer>
  )
}

export default Breadcrumbs