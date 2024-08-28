import React from 'react'
import Text from '../../../Views/Text/Text'
import IconSvg from '../../../Views/Icon/IconSvg'
import { phone } from '../../../Images'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap'
import { Link } from 'react-router-dom'

interface IProps{
  isIcon?: boolean;
  phoneNumber?: string | undefined;
}

const Phone: React.FC<IProps> = ({
  isIcon,
  phoneNumber
}:IProps) => {
  return (
    <BlockWrap addClass='block__header-top-container-phone'>
      {isIcon  && <IconSvg src={phone} width={15} style={{marginRight: 15}}/>}
      <Link to={`tel:${phoneNumber && phoneNumber.replace(/^<p>/g, '').replace(/<\/p>$/g, '')}`} >
        <Text addClass="text__footer-desc-address" style={{ textWrap: 'nowrap' }}>{phoneNumber ?? '+*(**)*************'}</Text>
      </Link>
    </BlockWrap>
  )
}

export default Phone