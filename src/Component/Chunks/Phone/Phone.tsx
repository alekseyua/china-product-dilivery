import React from 'react'
import Text from '../../../Views/Text/Text'
import IconSvg from '../../../Views/Icon/IconSvg'
import { phone } from '../../../Images'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap'

const Phone: React.FC = () => {
  return (
    <BlockWrap addClass='block__header-top-container-phone'>
    <IconSvg src={phone} width={15}/>
    <Text addClass='text__header-top-phone'>+(1)123456789</Text>
    </BlockWrap>
  )
}

export default Phone